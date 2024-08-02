import { LabIcon } from '@jupyterlab/ui-components';
import projectPanel from '../style/projectPanelIcon.svg';
import project from '../style/projectIcon.svg';
import environment from '../style/environmentIcon.svg';
import description from '../style/descriptionIcon.svg';
import profile from '../style/profileIcon.svg';
import details from '../style/detailsIcon.svg';
import settings from '../style/settingsIcon.svg';
import share from '../style/shareIcon.svg';
import collaborators from '../style/projectCollaborators.svg';
import individualCollaborator from '../style/individualCollaboratorBlue.svg';

export const ProjectPanelIcon = new LabIcon({
  name: 'jupybase:projectPanel',
  svgstr: projectPanel
});

export const ProjectIcon = new LabIcon({
  name: 'jupybase:project',
  svgstr: project
});

export const EnvironmentIcon = new LabIcon({
  name: 'jupybase:environment',
  svgstr: environment
});

export const DescriptionIcon = new LabIcon({
  name: 'jupybase:description',
  svgstr: description
});

export const ProfileIcon = new LabIcon({
  name: 'jupybase:profile',
  svgstr: profile
});

export const DetailsIcon = new LabIcon({
  name: 'jupybase:details',
  svgstr: details
});

export const SettingsIcon = new LabIcon({
  name: 'jupybase:settings',
  svgstr: settings
});

export const ShareIcon = new LabIcon({
  name: 'jupybase:share',
  svgstr: share
});

export const CollaboratorsIcon = new LabIcon({
  name: 'jupybase:collaborators',
  svgstr: collaborators
});

export const IndividualCollaboratorIcon = new LabIcon({
  name: 'jupybase:individual-collaborator',
  svgstr: individualCollaborator
});
