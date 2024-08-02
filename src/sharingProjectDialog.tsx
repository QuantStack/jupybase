import * as React from 'react';
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
  sharingProjectWrapperClass,
  userButtonClass,
  usersSearchClass
} from './style/projectPanel';
import { CollaboratorsIcon, IndividualCollaboratorIcon } from './icons';

const availableUsersList = [
  {
    name: 'User 3',
    email: 'user3@example.com'
  },
  {
    name: 'User 4',
    email: 'user4@example.com',
    role: 'editor'
  },
  {
    name: 'User 5',
    email: 'user5@example.com'
  }
];

const projectCollaboratorsList = [
  {
    name: 'Admin',
    email: 'admin@example.com',
    role: 'owner'
  },
  {
    name: 'User 1',
    email: 'user1@example.com',
    role: 'editor'
  },
  {
    name: 'User 2',
    email: 'user2@example.com',
    role: 'editor'
  }
];

interface ISharingProjectTitleProps {
  projectName: string;
}

interface ISharingProjectProps {
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

export function SharingProjectDialogBody({ userName }: ISharingProjectProps) {
  const [projectCollaborators, setProjectCollaborators] = React.useState(
    projectCollaboratorsList
  );
  const [availableUsers, setAvailableUsers] =
    React.useState(availableUsersList);
  const [filter, setFilter] = React.useState('');

  const onFilterChange = (event: any) => {
    setFilter(event.target.value);
  };

  const onFilterReset = () => {
    setFilter('');
  };

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
    setProjectCollaborators([...projectCollaborators, addedProjectCollaborator]);

    // eliminate user from available users list
    updateAvailableUsersList(user);
  };

  return (
    <div className={sharingProjectWrapperClass}>
      <div>
        <p className={collaboratorsTitleClass}>{'Project Collaborators'}</p>
        <div className={collaboratorsListClass}>
          {projectCollaborators.map((user, idx) => (
            <div className={collaboratorItemClass} key={idx}>
              <IndividualCollaboratorIcon.react
                tag="span"
                className={projectCardIconClass}
              />
              <div
                className={individualCollboratorWrapperClass}
                key={user.name}
              >
                <p>{user.name + (user.name === userName ? ' (you)' : '')}</p>
                <p className={individualCollaboratorClass}>{user.email}</p>
              </div>
              <p className={collaboratorRoleClass}>{user.role}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <p className={collaboratorsTitleClass}>{'Add collaborators'}</p>
        <Search
          className={usersSearchClass}
          placeholder="Search user..."
          value={filter}
          onInput={onFilterChange}
          onChange={onFilterChange}
          onReset={onFilterReset}
        />
        <div className={collaboratorsListClass}>
          {availableUsers
            .filter(user =>
              user.name.toLowerCase().includes(filter.toLowerCase())
            )
            .map((user, idx) => (
              <div className={collaboratorItemClass} key={idx}>
                <IndividualCollaboratorIcon.react
                  tag="span"
                  className={projectCardIconClass}
                />
                <div
                  className={individualCollboratorWrapperClass}
                  key={user.name}
                >
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
    </div>
  );
}
