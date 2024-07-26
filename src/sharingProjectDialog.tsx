import * as React from 'react';
import { Dialog, showDialog } from '@jupyterlab/apputils';
import { Search } from '@jupyter/react-components';
import {
  addUserButtonClass,
  collaboratorItemClass,
  collaboratorRoleClass,
  collaboratorsListClass,
  collaboratorsTitleClass,
  individualCollaboratorClass,
  individualCollboratorWrapperClass,
  projectCardIconClass,
  shareHeaderInfoClass,
  userButtonClass,
  usersSearchClass
} from './style/projectPanel';
import { CollaboratorsIcon, IndividualCollaboratorIcon } from './icons';

const availableUsersList = [
  {
    name: 'Meriem',
    email: 'meriem@quantstack.net'
  },
  {
    name: 'Darian',
    email: 'darian@quantstack.net'
  },
  {
    name: 'Trung',
    email: 'trung@quantstack.net'
  }
];

const projectCollaboratorsList = [
  {
    name: 'Denisa',
    email: 'denisa@qunatstack.net',
    role: 'owner'
  },
  {
    name: 'Anastasiia',
    email: 'anastasiia@quantstack.net',
    role: 'editor'
  },
  {
    name: 'Florence',
    email: 'florence@quantstack.net',
    role: 'viewer'
  }
];

export interface ISharingProjectProps {
  projectName: string;
  userName: string;
}

export const SharingProjectDialog = ({
  projectName,
  userName
}: ISharingProjectProps) => {
  const title = (
    <span className="jp-About-header">
      <CollaboratorsIcon.react margin="7px 9.5px" height="auto" width="28px" />
      <div className="jp-About-header-info">
        {'Share Project'}
        <span className="jp-About-version-info">
          <span className={shareHeaderInfoClass}>{projectName}</span>
        </span>
      </div>
    </span>
  );

  const body = (
    <div className="jp-About-body">
      <p className={collaboratorsTitleClass}>{'Project Collaborators'}</p>
      <div className={collaboratorsListClass}>
        {projectCollaboratorsList.map((user, idx) => (
          <div className={collaboratorItemClass}>
            <IndividualCollaboratorIcon.react
              tag="span"
              className={projectCardIconClass}
            />
            <div className={individualCollboratorWrapperClass}>
              <p>{user.name + (user.name === userName ? ' (you)' : '')}</p>
              <p className={individualCollaboratorClass}>{user.email}</p>
            </div>
            <p className={collaboratorRoleClass}>{'owner'}</p>
          </div>
        ))}
        ;
      </div>

      <br></br>
      <p className={collaboratorsTitleClass}>{'Add collaborators'}</p>
      <Search
        className={usersSearchClass}
        placeholder="Search user..."
        onInput={() => {
          console.log('INPUT');
        }}
      />
      <div className={collaboratorsListClass}>
        {availableUsersList.map((user, idx) => (
          <div className={collaboratorItemClass}>
            <IndividualCollaboratorIcon.react
              tag="span"
              className={projectCardIconClass}
            />
            <div className={individualCollboratorWrapperClass}>
              <p>{user.name} </p>
              <p className={individualCollaboratorClass}>{user.email}</p>
            </div>
            <div className={collaboratorRoleClass}>
              <button
                className={addUserButtonClass}
                onClick={() => {
                  console.log('Added user!');
                }}
              >
                <p className={userButtonClass}>{'add'}</p>
              </button>
            </div>
          </div>
        ))}
        ;
      </div>
    </div>
  );

  return showDialog({
    title,
    body,
    buttons: [
      Dialog.createButton({
        label: 'Close',
        className: 'jp-About-button jp-mod-reject jp-mod-styled'
      })
    ]
  });
};
