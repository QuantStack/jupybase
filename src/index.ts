import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

/**
 * Initialization data for the jupybase extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'jupybase:plugin',
  description: 'A JupyterLab extension.',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension jupybase is activated!');
  }
};

export default plugin;
