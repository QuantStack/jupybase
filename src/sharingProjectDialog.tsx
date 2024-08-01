import * as React from 'react';
import { useState } from 'react';
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
  },
  {
    name: 'Florence',
    email: 'florence@quantstack.net'
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
  }
];

interface ISharingProjectTitleProps {
  projectName: string;
}

interface ISharingProjectProps {
  projectName: string;
  userName: string;
}

export function SharingProjectDialogTitle({
  projectName
}: ISharingProjectTitleProps) {
  return (
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
}

export function SharingProjectDialogBody({
  projectName,
  userName
}: ISharingProjectProps) {
  const [projectCollaborators, setProjectCollaborators] = useState(
    projectCollaboratorsList
  );
  const [availableUsers, setAvailableUsers] = useState(availableUsersList);

  const updateAvailableUsersList = (user: { name: string; email: string }) => {
    const userIndex = availableUsers.indexOf(user);
    const users = [...availableUsers];
    users.splice(userIndex, 1);
    setAvailableUsers(users);
  };

  const updateProjectCollaborators = (user: {
    name: string;
    email: string;
  }) => {
    const addedProjectCollaborator = {
      name: user.name,
      email: user.email,
      role: 'viewer' // TO DO: let user choose collaborator role
    };

    // add user to project collaborators
    const collaborators = [...projectCollaborators];
    collaborators.push(addedProjectCollaborator);
    setProjectCollaborators(collaborators);

    // eliminate user from available users list
    updateAvailableUsersList(user);
  };

  return (
    <div className="jp-About-body">
      <p className={collaboratorsTitleClass}>{'Project Collaborators'}</p>
      <div className={collaboratorsListClass}>
        {projectCollaborators.map((user, idx) => (
          <div className={collaboratorItemClass} key={idx}>
            <IndividualCollaboratorIcon.react
              tag="span"
              className={projectCardIconClass}
            />
            <div className={individualCollboratorWrapperClass} key={user.name}>
              <p>{user.name + (user.name === userName ? ' (you)' : '')}</p>
              <p className={individualCollaboratorClass}>{user.email}</p>
            </div>
            <p className={collaboratorRoleClass}>{user.role}</p>
          </div>
        ))}
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
        {availableUsers.map((user, idx) => (
          <div className={collaboratorItemClass} key={idx}>
            <IndividualCollaboratorIcon.react
              tag="span"
              className={projectCardIconClass}
            />
            <div className={individualCollboratorWrapperClass} key={user.name}>
              <p>{user.name} </p>
              <p className={individualCollaboratorClass}>{user.email}</p>
            </div>
            <button
              className={addUserButtonClass}
              onClick={() => {
                updateProjectCollaborators(user);
              }}
            >
              <p className={userButtonClass}>{'add'}</p>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
