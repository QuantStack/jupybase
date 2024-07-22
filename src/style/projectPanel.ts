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

  margin: '0 0 0 0',
  padding: '0px 6px !important',

  border: 'none',
  background: 'var(--jp-layout-color1)',

  $nest: {
    '&:active': {
      transform: 'scale(1.272019649)',
      backgroundColor: 'var(--jp-layout-color3)'
    },

    '&:hover': {
      backgroundColor: 'var(--md-blue-grey-50)'
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
