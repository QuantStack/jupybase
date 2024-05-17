import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';
// import { signInWithOAuth } from './signin';
import { createClient } from './client';
import { extractCookies } from './signin';

/**
 * Initialization data for the jupybase extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'jupybase:plugin',
  description: 'A JupyterLab extension.',
  autoStart: true,
  activate: async (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension jupybase is activated!');
    const supabase = createClient();
    const authCookies = extractCookies();
    if (authCookies) {
      await supabase.auth.setSession({
        access_token: authCookies.accessTokenCookie[1],
        refresh_token: authCookies.refreshTokenCookie[1]
      });
      const { data, error } = await supabase.auth.getUserIdentities();
      console.log('USER DATA', data, error);
    } else {
      // await signInWithOAuth();
      console.log('error');
    }
  }
};

export default plugin;
