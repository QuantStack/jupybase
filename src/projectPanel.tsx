import * as React from 'react';
import {
  enviromentList,
  enviromentListItem,
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
  EnviromentIcon,
  SettingsIcon,
  ShareIcon
} from './icons';
import { getURL } from './signin';
import { IEnviromentContent } from '.';

export interface IProjectProps {
  name: string;
  description: string;
  details: string;
  enviroment: IEnviromentContent;
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

  const onSettingsClick = (
    event?: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    // TO DO: redirect to edit page of project
    const url = getURL('/launcher/project');
    window.open(url, '_blank', 'noreferrer');
  };

  const onShareClick = (event?: React.MouseEvent<HTMLElement, MouseEvent>) => {
    console.log('Sharing project button clicked.');
  };

  const renderToolbar = () => {
    return (
      <div className={projectNavClass}>
        <span className={spacer} />
        <span className={spacer} />
        <button
          className={projectNavButtonClass}
          title={'User Profile'}
          type="button"
          onClick={() => onProfileClick()}
        >
          <ProfileIcon.react tag="span" className={projectNavIconClass} />
        </button>
        <button
          className={projectNavButtonClass}
          title={'Share Project'}
          type="button"
          onClick={() => onShareClick()}
        >
          <ShareIcon.react tag="span" className={projectNavIconClass} />
        </button>
        <button
          className={projectNavButtonClass}
          title={'Project Settings'}
          type="button"
          onClick={() => onSettingsClick()}
        >
          <SettingsIcon.react tag="span" className={projectNavIconClass} />
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
    const [open, setOpen] = React.useState(false);

    function onEnviromentClick() {
      setOpen(!open);
    }

    return (
      <div>
        <button
          onClick={() => onEnviromentClick()}
          className={projectCardClass}
          title={'Enviroment'}
        >
          <EnviromentIcon.react tag="span" className={projectCardIconClass} />
          <div className={projectCardTitleWrapperClass}>
            <p className={projectCardSubtitleClass}>{'Enviroment'}</p>
            {enviroment.dependencies.length > 0 && open && (
              <div className={projectCardTitleWrapperClass}>
                <p>{'Dependencies:'}</p>
                <ul className={enviromentList}>
                  {enviroment.dependencies.map((dependency, idx) => (
                    <li key={idx} className={enviromentListItem}>
                      {dependency}
                    </li>
                  ))}
                </ul>
              </div>
            )}
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
        {renderDetails()}
        <br></br>
        {renderEnviroment()}
      </div>
    </React.Fragment>
  );
}
