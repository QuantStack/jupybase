import * as React from 'react';
import { Dialog, showDialog } from '@jupyterlab/apputils';
import {
  closeButtonDialogClass,
  environmentButtonClass,
  panelWrapperClass,
  projectCardClass,
  projectCardIconClass,
  projectCardSubtitleClass,
  projectCardTitleWrapperClass,
  projectNavButtonClass,
  projectNavClass,
  projectNavIconClass,
  spacer
} from './style/projectPanel';
import {
  ProjectIcon,
  ProfileIcon,
  DescriptionIcon,
  DetailsIcon,
  EnvironmentIcon,
  SettingsIcon,
  ShareIcon
} from './icons';
import { getURL } from './tools';
import { IEnvironmentContent } from './token';
import {
  SharingProjectDialogBody,
  SharingProjectDialogTitle
} from './sharingProjectDialog';
import { EnvironmentDialog } from './environmentDialog';

export interface IProjectProps {
  name: string;
  description: string;
  details: string;
  environment: IEnvironmentContent;
}

const onProfileClick = () => {
  const url = getURL('/account');
  window.open(url, '_blank', 'noreferrer');
};

const onSettingsClick = () => {
  // TO DO: redirect to edit page of project
  const url = getURL('/launcher/project');
  window.open(url, '_blank', 'noreferrer');
};

function renderToolbar({ name }: IProjectProps) {
  const onShareClick = React.useCallback(() => {
    // open the sharing project dialog
    return showDialog({
      title: <SharingProjectDialogTitle projectName={name} />,
      body: <SharingProjectDialogBody userName={'Admin'} />,
      buttons: [
        Dialog.createButton({
          label: 'Close',
          className: closeButtonDialogClass
        })
      ]
    });
  }, [name]);

  return (
    <div className={projectNavClass}>
      <span className={spacer} />
      <button
        className={projectNavButtonClass}
        title={'User Profile'}
        type="button"
        onClick={onProfileClick}
      >
        <ProfileIcon.react tag="span" className={projectNavIconClass} />
      </button>
      <button
        className={projectNavButtonClass}
        title={'Share Project'}
        type="button"
        onClick={onShareClick}
      >
        <ShareIcon.react tag="span" className={projectNavIconClass} />
      </button>
      <button
        className={projectNavButtonClass}
        title={'Project Settings'}
        type="button"
        onClick={onSettingsClick}
      >
        <SettingsIcon.react tag="span" className={projectNavIconClass} />
      </button>
    </div>
  );
}

function renderName({ name }: IProjectProps) {
  return (
    <div>
      <button disabled className={projectCardClass} title={'Project: ' + name}>
        <ProjectIcon.react tag="span" className={projectCardIconClass} />
        <div className={projectCardTitleWrapperClass}>
          <p className={projectCardSubtitleClass}>{'Project'}</p>
          <p>{name}</p>
        </div>
      </button>
    </div>
  );
}

function renderEnvironment({ name, environment }: IProjectProps) {
  const onBuildEnvironmentClick = React.useCallback(() => {
    EnvironmentDialog({
      projectName: name,
      envCode: environment.buildEnv,
      envType: 'build'
    });
  }, [name, environment.buildEnv]);

  const onKernelEnvironmentClick = React.useCallback(() => {
    EnvironmentDialog({
      projectName: name,
      envCode: environment.kernelEnv,
      envType: 'kernel'
    });
  }, [name, environment.kernelEnv]);

  return (
    <div>
      <button className={projectCardClass} title={'Environment'}>
        <EnvironmentIcon.react tag="span" className={projectCardIconClass} />
        <div className={projectCardTitleWrapperClass}>
          <p className={projectCardSubtitleClass}>{'Environment'}</p>
          <button
            title={'Build environment'}
            className={environmentButtonClass}
            onClick={onBuildEnvironmentClick}
          >
            {'Build environment'}
          </button>
          <button
            title={'Kernel environment'}
            className={environmentButtonClass}
            onClick={onKernelEnvironmentClick}
          >
            {'Kernel environment'}
          </button>
        </div>
      </button>
    </div>
  );
}

function renderDescription({ description }: IProjectProps) {
  return (
    <div>
      <button
        disabled
        className={projectCardClass}
        title={'Description: ' + description}
      >
        <DescriptionIcon.react tag="span" className={projectCardIconClass} />
        <div className={projectCardTitleWrapperClass}>
          <p className={projectCardSubtitleClass}>{'Description'}</p>
          <p>{description}</p>
        </div>
      </button>
    </div>
  );
}

function renderDetails({ details }: IProjectProps) {
  return (
    <div>
      <button
        disabled
        className={projectCardClass}
        title={'Details: ' + details}
      >
        <DetailsIcon.react tag="span" className={projectCardIconClass} />
        <div className={projectCardTitleWrapperClass}>
          <p className={projectCardSubtitleClass}>{'Details'}</p>
          <p>{details}</p>
        </div>
      </button>
    </div>
  );
}

export function ProjectPanel(props: IProjectProps) {
  return (
    <React.Fragment>
      {renderToolbar(props)}
      <div className={panelWrapperClass}>
        {renderName(props)}
        {renderDescription(props)}
        {renderDetails(props)}
        {renderEnvironment(props)}
      </div>
    </React.Fragment>
  );
}
