import {
  ILayoutRestorer,
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';
import { Token } from '@lumino/coreutils';
import { Panel } from '@lumino/widgets';
import { createClient } from './client';
import { extractCookies, getURL } from './signin';
import { IS3Auth } from 'jupydrive-s3';
import { ProjectPanelIcon } from './icons';
import { ProjectPanelWidget } from './projectWidget';
import {
  NEXT_PUBLIC_SUPABASE_ANON_KEY,
  NEXT_PUBLIC_SUPABASE_PROJECT_REF,
  NEXT_PUBLIC_SUPABASE_S3_URL,
  NEXT_PUBLIC_SUPABASE_S3_REGION,
  DEV_MODE_S3_ACCESS_KEY_ID,
  DEV_MODE_S3_SECRET_ACCESS_KEY
} from './config';

/**
 * A promise that resolves to project and enviroment information.
 */
export interface IProjectInfo {
  factory: () => Promise<{
    name: string;
    description: string;
    details: string;
    enviroment: {
      name: string;
      dependencies: string[];
    };
  }>;
}

/**
 * A token for the plugin that provides project information.
 */
export const IProjectInfo = new Token<IProjectInfo>(
  'jupybase:project-info-provider'
);

/**
 * The ID used for the project side bar.
 */
export const PROJECT_SIDEBAR_ID = 'jupybase:project-sidepanel';

/**
 * The jupybase plugin.
 */
const plugin: JupyterFrontEndPlugin<IS3Auth> = {
  id: 'jupybase:plugin',
  description: 'A JupyterLab extension.',
  autoStart: true,
  provides: IS3Auth,
  activate: async (app: JupyterFrontEnd): Promise<IS3Auth> => {
    console.log('JupyterLab extension jupybase is activated!');
    const supabase = createClient();
    const authCookies = extractCookies();
    let factory = () => ({}) as any;
    const devMode =
      location.hostname === 'localhost' || location.hostname === '127.0.0.1';
    if (authCookies) {
      await supabase.auth.setSession({
        access_token: authCookies.accessTokenCookie[1],
        refresh_token: authCookies.refreshTokenCookie[1]
      });
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

/**
 * The project information provider.
 */
const projectInfo: JupyterFrontEndPlugin<IProjectInfo> = {
  id: 'jupybase:project-info-provider',
  description: 'The project information provider.',
  provides: IProjectInfo,
  activate: async (): Promise<IProjectInfo> => {
    // extract the project id from the url
    const searchParams = new URLSearchParams(window.location.search);
    const projectId = searchParams.get('id');

    // initiate supabase client and extract the current session access token
    const supabase = createClient();
    const authSession = await supabase.auth.getSession();
    const sessionToken = authSession.data.session?.access_token;

    // fetch the project information
    const url = getURL(`/api/v1/env/${projectId}`);
    const response = await fetch(url, {
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${sessionToken}`
      }
    });
    const result = await response.json();

    return {
      factory: async () => ({
        name: result.data[0].content.name ?? 'Default Project',
        description:
          result.data[0].content.shortDesc ?? 'Default Jupyterlite deployment',
        details:
          result.data[0].content.description ??
          'Default JupyterLite deployment proposed by QS.AI. It contains the popular Python scientific libraries like Numpy, Scipy,... as well as vizualization tools.',
        enviroment: {
          name: result.data[0].content.enviroment ?? 'Default Enviroment',
          dependencies: result.data[0].content.dependencies
        }
      })
    };
  }
};

/**
 * Project side panel.
 */
const projectSidePanel: JupyterFrontEndPlugin<void> = {
  id: 'jupybase:project-side-panel',
  description: 'The project side panel.',
  requires: [IProjectInfo],
  optional: [ILayoutRestorer],
  autoStart: true,
  activate: async (
    app: JupyterFrontEnd,
    projectProvider: IProjectInfo,
    restorer: ILayoutRestorer | null
  ): Promise<void> => {
    // retrieve project information
    const project = await projectProvider.factory();

    // create new side panel for the project
    const projectPanel = new Panel();
    projectPanel.title.icon = ProjectPanelIcon;
    projectPanel.title.iconClass = 'jp-sideBar-tabIcon';
    projectPanel.title.caption = 'Project';
    projectPanel.id = PROJECT_SIDEBAR_ID;

    // add project panel widget to side panel
    projectPanel.addWidget(new ProjectPanelWidget(project));

    app.shell.add(projectPanel, 'left', { rank: 0 });

    if (restorer) {
      restorer.add(projectPanel, 'project-sidepanel');
    }
  }
};

const plugins: JupyterFrontEndPlugin<any>[] = [
  plugin,
  projectSidePanel,
  projectInfo
];

export default plugins;
