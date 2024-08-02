import { ReactWidget } from '@jupyterlab/apputils';
import * as React from 'react';

import { ProjectPanel } from './projectPanel';
import { projectWidgetStyle } from './style/projectPanel';
import { IEnvironmentContent } from './token';

export class ProjectPanelWidget extends ReactWidget {
  constructor(options: Private.IProjectOptions) {
    super();
    this.node.id = 'ProjectSidebar-root';
    this.addClass(projectWidgetStyle);

    this._projectName = options.name;
    this._projectDescription = options.description;
    this._projectDetails = options.details;
    this._environment = options.environment;
  }

  render(): JSX.Element {
    return (
      <div>
        <ProjectPanel
          name={this._projectName}
          description={this._projectDescription}
          details={this._projectDetails}
          environment={this._environment}
        />
      </div>
    );
  }

  private _projectName: string;
  private _projectDescription: string;
  private _projectDetails: string;
  private _environment: IEnvironmentContent;
}

export namespace Private {
  export interface IProjectOptions {
    name: string;
    description: string;
    details: string;
    environment: IEnvironmentContent;
  }
}
