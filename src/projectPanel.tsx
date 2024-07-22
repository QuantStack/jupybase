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

export class ProjectPanel extends React.Component<IProjectProps> {
  constructor(props: IProjectProps) {
    super(props);
  }

  private _onProfileClick(event?: React.MouseEvent<HTMLElement, MouseEvent>) {
    const url = getURL('/account');
    window.open(url, '_blank', 'noreferrer');
  }

  private _renderToolbar(): React.ReactElement {
    return (
      <div className={projectNavClass}>
        <span className={spacer} />
        <button
          className={projectNavButtonClass}
          title={'User Profile'}
          type="button"
          onClick={() => this._onProfileClick()}
        >
          <ProfileIcon.react tag="span" className={projectNavIconClass} />
        </button>
      </div>
    );
  }

  private _renderName(): React.ReactElement {
    return (
      <div>
        <button
          disabled
          className={projectCardClass}
          title={'Project: ' + this.props.name}
        >
          <ProjectIcon.react tag="span" className={projectCardIconClass} />
          <div className={projectCardTitleWrapperClass}>
            <p className={projectCardSubtitleClass}>{'Project'}</p>
            <p>{this.props.name}</p>
          </div>
        </button>
      </div>
    );
  }

  private _renderEnviroment(): React.ReactElement {
    return (
      <div>
        <button
          disabled
          className={projectCardClass}
          title={'Enviroment: ' + this.props.enviroment}
        >
          <EnviromentIcon.react tag="span" className={projectCardIconClass} />
          <div className={projectCardTitleWrapperClass}>
            <p className={projectCardSubtitleClass}>{'Enviroment'}</p>
            <p>{this.props.enviroment.name}</p>
          </div>
        </button>
      </div>
    );
  }

  private _renderDescription(): React.ReactElement {
    return (
      <div>
        <button
          disabled
          className={projectCardClass}
          title={'Description: ' + this.props.description}
        >
          <DescriptionIcon.react tag="span" className={projectCardIconClass} />
          <div className={projectCardTitleWrapperClass}>
            <p className={projectCardSubtitleClass}>{'Description'}</p>
            <p>{this.props.description}</p>
          </div>
        </button>
      </div>
    );
  }

  private _renderDetails(): React.ReactElement {
    return (
      <div>
        <button
          disabled
          className={projectCardClass}
          title={'Details: ' + this.props.details}
        >
          <DetailsIcon.react tag="span" className={projectCardIconClass} />
          <div className={projectCardTitleWrapperClass}>
            <p className={projectCardSubtitleClass}>{'Details'}</p>
            <p>{this.props.details}</p>
          </div>
        </button>
      </div>
    );
  }

  render(): React.ReactElement {
    return (
      <React.Fragment>
        {this._renderToolbar()}
        <div className={panelWrapperClass}>
          {this._renderName()}
          <br></br>
          {this._renderDescription()}
          <br></br>
          {this._renderEnviroment()}
          <br></br>
          {this._renderDetails()}
        </div>
      </React.Fragment>
    );
  }
}
