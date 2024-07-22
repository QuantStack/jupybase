import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';
import Axios from 'axios';
import { IS3Auth } from 'jupydrive-s3';

import { createClient } from './client';
import {
  DEV_MODE_S3_ACCESS_KEY_ID,
  DEV_MODE_S3_SECRET_ACCESS_KEY,
  MAIN_APP_PUBLIC_URL,
  NEXT_PUBLIC_SUPABASE_ANON_KEY,
  NEXT_PUBLIC_SUPABASE_PROJECT_REF,
  NEXT_PUBLIC_SUPABASE_S3_REGION,
  NEXT_PUBLIC_SUPABASE_S3_URL
} from './config';
import { IJupybaseClient } from './token';
import { extractCookies, getURL } from './tools';

const apiClientPlugin: JupyterFrontEndPlugin<IJupybaseClient> = {
  id: 'jupybase:jupybaseClientPlugin',
  description: 'Plugin providing authenticated clients',
  autoStart: true,
  provides: IJupybaseClient,
  activate: async (app: JupyterFrontEnd): Promise<IJupybaseClient> => {
    console.log('jupybase:apiClientPlugin is activated!');
    const supabase = createClient();
    const authCookies = extractCookies();
    const axios = Axios.create({
      headers: {
        'Content-Type': 'application/json'
      },
      baseURL: MAIN_APP_PUBLIC_URL
    });
    const devMode =
      location.hostname === 'localhost' || location.hostname === '127.0.0.1';
    if (authCookies) {
      await supabase.auth.setSession({
        access_token: authCookies.accessTokenCookie[1],
        refresh_token: authCookies.refreshTokenCookie[1]
      });
      const tokenFactory = async () => {
        const authSession = await supabase.auth.getSession();
        return authSession.data.session?.access_token;
      };

      axios.interceptors.request.use(async config => {
        const token = await tokenFactory();
        if (token && config && config.headers) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      });
    } else {
      if (devMode) {
        console.log('USER IS NOT LOGGED IN');
        return {};
      } else {
        window.location.replace(getURL('/signin/password_signin'));
      }
    }

    return { supabaseClient: supabase, apiClient: axios };
  }
};

const s3plugin: JupyterFrontEndPlugin<IS3Auth> = {
  id: 'jupybase:s3plugin',
  description: 'Plugin providing S3 auth token',
  autoStart: true,
  requires: [IJupybaseClient],
  provides: IS3Auth,
  activate: async (
    app: JupyterFrontEnd,
    jupybaseClient: IJupybaseClient
  ): Promise<IS3Auth> => {
    console.log('jupybase:s3plugin is activated!');
    const supabase = jupybaseClient.supabaseClient;

    let factory = () => ({}) as any;
    const devMode =
      location.hostname === 'localhost' || location.hostname === '127.0.0.1';
    if (supabase) {
      factory = async () => {
        const authSession = await supabase.auth.getSession();
        const sessionToken = authSession.data.session?.access_token;
        let credentials;
        if (devMode) {
          credentials = {
            accessKeyId: DEV_MODE_S3_ACCESS_KEY_ID,
            secretAccessKey: DEV_MODE_S3_SECRET_ACCESS_KEY
          };
        } else {
          credentials = {
            accessKeyId: NEXT_PUBLIC_SUPABASE_PROJECT_REF,
            secretAccessKey: NEXT_PUBLIC_SUPABASE_ANON_KEY,
            sessionToken
          };
        }
        const authData = {
          bucket: 'qsai',
          config: {
            forcePathStyle: true,
            endpoint: NEXT_PUBLIC_SUPABASE_S3_URL,
            region: NEXT_PUBLIC_SUPABASE_S3_REGION,
            credentials: credentials
          }
        };
        return authData;
      };
    } else {
      if (devMode) {
        console.log('USER IS NOT LOGGED IN');
      } else {
        window.location.replace(getURL('/signin/password_signin'));
      }
    }

    return { factory };
  }
};

export default [s3plugin, apiClientPlugin];
