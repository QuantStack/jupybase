import { ReactWidget } from '@jupyterlab/apputils';
import * as React from 'react';

import { ProjectPanel } from './projectPanel';
import { projectWidgetStyle } from './style/projectPanel';
import { IEnviromentContent } from '.';

export class ProjectPanelWidget extends ReactWidget {
  constructor(options: Private.IProjectOptions) {
    super();
    this.node.id = 'ProjectSidebar-root';
    this.addClass(projectWidgetStyle);

    this._projectName = options.name;
    this._projectDescription = options.description;
    this._projectDetails = options.details;
    this._enviroment = options.enviroment;
  }

  render(): JSX.Element {
    return (
      <div>
        <ProjectPanel
          name={this._projectName}
          description={this._projectDescription}
          details={this._projectDetails}
          enviroment={this._enviroment}
        />
      </div>
    );
  }

  private _projectName: string;
  private _projectDescription: string;
  private _projectDetails: string;
  private _enviroment: IEnviromentContent;
}

export namespace Private {
  export interface IProjectOptions {
    name: string;
    description: string;
    details: string;
    enviroment: IEnviromentContent;
  }
}