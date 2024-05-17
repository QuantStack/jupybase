import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';
// import { signInWithOAuth } from './signin';
import { createClient } from './client';

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
    const { data, error } = await supabase.auth.getUserIdentities();
    console.log('USER DATA', data, error);
    if (!data) {
      // await signInWithOAuth();
    } else {
      //
    }
  }
};

export default plugin;
