import { ReactWidget } from '@jupyterlab/apputils';
import * as React from 'react';

import { ProjectPanel } from './projectPanel';
import { projectWidgetStyle } from './style/projectPanel';
import { IEnvironmentContent, IProjectOptions } from './token';

export class ProjectPanelWidget extends ReactWidget {
  constructor(options: IProjectOptions) {
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
      <ProjectPanel
        name={this._projectName}
        description={this._projectDescription}
        details={this._projectDetails}
        environment={this._environment}
      />
    );
  }

  private _projectName: string;
  private _projectDescription: string;
  private _projectDetails: string;
  private _environment: IEnvironmentContent;
}
