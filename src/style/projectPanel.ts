import { style } from 'typestyle';

export const projectWidgetStyle = style({});

export const panelWrapperClass = style({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  overflowY: 'auto',
  alignItems: 'center'
});

export const projectCardClass = style({
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'row',
  whiteSpace: 'nowrap',

  width: '225px',
  minHeight: '50px',

  marginRight: 'auto',

  /* top | right | bottom | left */
  padding: '5px 10px 5px 10px',

  fontSize: 'var(--jp-ui-font-size1)',
  lineHeight: '1.5em',
  color: 'var(--jp-ui-font-color1)',
  textAlign: 'left',

  border: 'none',
  borderRadius: '15px',
  borderColor: 'var(--md-blue-grey-100)',

  background: 'var(--md-blue-grey-50)',

  $nest: {
    '&:hover': {
      backgroundColor: 'var(--md-blue-grey-100)',
      borderColor: 'var(--md-blue-grey-200)'
    }
  }
});

export const projectCardIconClass = style({
  width: '16px',
  height: '16px',

  /* top | right | bottom | left */
  margin: 'auto 8px auto 0'
});

export const projectCardTitleWrapperClass = style({
  flexBasis: 0,
  flexGrow: 1,

  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap',

  whiteSpace: 'normal',
  wordWrap: 'break-word',
  wordBreak: 'break-word',

  marginTop: 'auto',
  marginBottom: 'auto',
  marginRight: 'auto',

  $nest: {
    '& > p': {
      marginTop: 0,
      marginBottom: 0
    }
  }
});

export const projectCardSubtitleClass = style({
  marginBottom: 'auto',

  fontWeight: 700
});

export const projectNavButtonClass = style({
  boxSizing: 'border-box',
  height: '24px',
  width: 'var(--jp-private-running-button-width) !important',
  right: 0,

  margin: '6px 2px auto 2px',
  padding: '0px 2px !important',

  borderWidth: '0',
  borderRadius: '7px',

  background: '#000000',

  $nest: {
    '&:active': {
      transform: 'scale(1.272019649)',
      backgroundColor: 'var(--md-blue-A400)'
    },
    '&:hover': {
      backgroundColor: 'var(--md-blue-A400)'
    }
  }
});

export const projectNavIconClass = style({
  width: '20px',
  height: '20px',

  /* top | right | bottom | left */
  margin: 'auto 2px auto 2px'
});

export const projectNavClass = style({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',

  minHeight: '35px',
  lineHeight: 'var(--jp-private-running-item-height)',

  backgroundColor: 'var(--jp-layout-color1)'
});

export const spacer = style({
  flex: '1 1 auto'
});

export const shareHeaderInfoClass = style({
  display: 'block',
  paddingTop: '2px'
});

export const collaboratorsTitleClass = style({
  marginTop: '0px',
  marginBottom: '0px',

  fontWeight: 700
});

export const collaboratorsListClass = style({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',

  height: '100px'
});

export const collaboratorItemClass = style({
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'row',
  whiteSpace: 'nowrap',

  justifyContent: 'space-between',

  width: '350px',
  height: '30px',

  marginRight: 'auto',

  /* top | right | bottom | left */
  padding: '2px 5px 5px 5px',

  fontSize: '1em',
  lineHeight: '1em',
  textAlign: 'left',

  $nest: {
    '&:hover': {
      backgroundColor: 'var(--md-blue-grey-50)'
    }
  }
});

export const collaboratorIconClass = style({
  marginRight: '2px'
});

export const individualCollboratorWrapperClass = style({
  flexBasis: 0,
  flexGrow: 1,

  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap',

  whiteSpace: 'normal',
  wordWrap: 'break-word',
  wordBreak: 'break-word',

  marginTop: 'auto',
  marginBottom: 'auto',
  marginRight: 'auto',

  $nest: {
    '& > p': {
      marginTop: 0,
      marginBottom: 0
    }
  }
});

export const individualCollaboratorClass = style({
  fontSize: 'var(--jp-ui-font-size0)',
  lineHeight: '1em',
  fontWeight: 400
});

export const collaboratorRoleClass = style({
  right: 0,
  fontWeight: '0.9em',
  height: '20px',

  margin: '0',
  padding: '0',

  flexGrow: '1',
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center'
});

export const usersSearchClass = style({
  boxSizing: 'border-box',
  width: '350px'
});

export const addUserButtonClass = style({
  boxSizing: 'border-box',
  height: '20px !important',
  right: 0,
  alignContent: 'center',
  lineHeight: '15px !important',

  margin: '0',
  /* top | right | bottom | left */
  padding: '0px 2px 0px 2px',

  borderWidth: '0',
  borderRadius: '7px',

  background: '#000000',

  $nest: {
    '&:active': {
      transform: 'scale(1.272019649)',
      backgroundColor: 'var(--md-blue-A400)'
    },
    '&:hover': {
      backgroundColor: 'var(--md-blue-A400)'
    }
  }
});

export const userButtonClass = style({
  color: 'white',
  fontSize: 'var(--jp-ui-font-size0)',

  margin: 0,
  padding: 0,

  alignSelf: 'center'
});

export const environmentButtonClass = style({
  border: 0,
  borderRadius: '7px',

  padding: '1px 2px',
  textAlign: 'center',

  margin: '2px 2px',
  width: '160px',

  backgroundColor: 'var(--md-blue-grey-100)',

  $nest: {
    '&:active': {
      backgroundColor: 'var(--md-blue-A400)'
    },
    '&:hover': {
      backgroundColor: 'var(--md-blue-grey-200)',
      borderColor: 'var(--md-blue-grey-200)'
    }
  }
});

export const closeButtonDialogClass = style({
  boxSizing: 'border-box',
  // height: '30px !important',
  // alignContent: 'center',

  margin: '0',
  /* top | right | bottom | left */
  padding: '0px 2px 0px 2px',

  borderWidth: '0',
  borderRadius: '7px',

  background: '#000000 !important',

  $nest: {
    '&:active': {
      backgroundColor: 'var(--md-blue-A400) !important'
    },
    '&:hover': {
      backgroundColor: 'var(--md-blue-A400) !important'
    }
  }
});
