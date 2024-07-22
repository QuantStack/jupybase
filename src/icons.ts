import { LabIcon } from '@jupyterlab/ui-components';
import projectPanel from '../style/projectPanelIcon.svg';
import project from '../style/projectIcon.svg';
import enviroment from '../style/enviromentIcon.svg';
import description from '../style/descriptionIcon.svg';
import profile from '../style/profileIcon.svg';
import details from '../style/detailsIcon.svg';

export const ProjectPanelIcon = new LabIcon({
  name: 'jupybase:projectPanel',
  svgstr: projectPanel
});

export const ProjectIcon = new LabIcon({
  name: 'jupybase:project',
  svgstr: project
});

export const EnviromentIcon = new LabIcon({
  name: 'jupybase:enviroment',
  svgstr: enviroment
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
