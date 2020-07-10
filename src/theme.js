import { createMuiTheme } from '@material-ui/core/styles';

const COLOR_BLACK = '#121212';
const COLOR_BLACK_SUBDUED = '#1e1e1e';
const COLOR_PRIMARY = '#FF5761';
const COLOR_SECONDARY = '#FFFFFF';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: COLOR_PRIMARY,
    },
    secondary: {
      main: COLOR_SECONDARY,
    },
    background: {
      default: COLOR_BLACK,
      paper: COLOR_BLACK_SUBDUED,
    },
  },
  typography: {
    fontFamily: 'obviously, sans-serif',
    h1: {
      fontFamily: 'obviously, sans-serif',
      fontWeight: 700,
      fontStyle: 'normal',
    },
    h2: {
      fontFamily: 'obviously, sans-serif',
      fontWeight: 700,
      fontStyle: 'normal',
    },
    h3: {
      fontFamily: 'obviously, sans-serif',
      fontWeight: 700,
      fontStyle: 'normal',
      textTransform: 'uppercase',
    },
    h4: {
      fontFamily: 'obviously, sans-serif',
      fontWeight: 500,
      fontStyle: 'normal',
    },
    h5: {
      fontFamily: 'obviously, sans-serif',
      fontWeight: 500,
      fontStyle: 'normal',
    },
    h6: {
      fontFamily: 'obviously, sans-serif',
      fontWeight: 700,
      fontStyle: 'normal',
      fontSize: '1.125rem',
      textTransform: 'uppercase',
    },
    subtitle1: {
      fontFamily: 'Vulf Mono',
      fontWeight: 300,
      fontStyle: 'normal',
    },
    body2: {
      lineHeight: 2,
    },
    button: {
      fontSize: '0.75rem',
      letterSpacing: 0.5,
    },
  },
  overrides: {
    // Surfaces
    MuiAppBar: {
      root: {
        backgroundColor: COLOR_BLACK,
      },
    },
    MuiDrawer: {
      paperAnchorDockedLeft: {
        borderRight: 0,
      },
      paper: {
        borderTopRightRadius: 12,
        borderBottomRightRadius: 12,
      },
    },

    // Lists
    MuiList: {
      root: {
        padding: 8,
      },
    },
    MuiListItem: {
      button: {
        borderRadius: 8,
        marginTop: 8,
      },
    },
  },
});

export default theme;
