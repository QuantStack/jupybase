import * as React from 'react';
import {
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
  EnviromentIcon
} from './icons';
import { getURL } from './signin';

export interface IProjectProps {
  name: string;
  description: string;
  details: string;
  enviroment: {
    name: string;
    dependencies: string[];
  };
}

export function ProjectPanel({
  name,
  description,
  details,
  enviroment
}: IProjectProps) {
  const onProfileClick = (
    event?: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    const url = getURL('/account');
    window.open(url, '_blank', 'noreferrer');
  };

  const renderToolbar = () => {
    return (
      <div className={projectNavClass}>
        <span className={spacer} />
        <button
          className={projectNavButtonClass}
          title={'User Profile'}
          type="button"
          onClick={() => onProfileClick()}
        >
          <ProfileIcon.react tag="span" className={projectNavIconClass} />
        </button>
      </div>
    );
  };

  const renderName = () => {
    return (
      <div>
        <button
          disabled
          className={projectCardClass}
          title={'Project: ' + name}
        >
          <ProjectIcon.react tag="span" className={projectCardIconClass} />
          <div className={projectCardTitleWrapperClass}>
            <p className={projectCardSubtitleClass}>{'Project'}</p>
            <p>{name}</p>
          </div>
        </button>
      </div>
    );
  };

  const renderEnviroment = () => {
    return (
      <div>
        <button
          disabled
          className={projectCardClass}
          title={'Enviroment: ' + enviroment.name}
        >
          <EnviromentIcon.react tag="span" className={projectCardIconClass} />
          <div className={projectCardTitleWrapperClass}>
            <p className={projectCardSubtitleClass}>{'Enviroment'}</p>
            <p>{enviroment.name}</p>
          </div>
        </button>
      </div>
    );
  };

  const renderDescription = () => {
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
  };

  const renderDetails = () => {
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
  };

  return (
    <React.Fragment>
      {renderToolbar()}
      <div className={panelWrapperClass}>
        {renderName()}
        <br></br>
        {renderDescription()}
        <br></br>
        {renderEnviroment()}
        <br></br>
        {renderDetails()}
      </div>
    </React.Fragment>
  );
}
