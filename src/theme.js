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
      fontFamily: 'obviously, sans-serif',
      fontWeight: 500,
      fontStyle: 'normal',
      lineHeight: 1.25,
    },
    subtitle2: {
      fontFamily: 'Vulf Mono',
      fontWeight: 300,
      fontStyle: 'normal',
      fontSize: '1.125rem',
    },
    body2: {
      lineHeight: 2,
    },
    button: {
      fontSize: '0.75rem',
      letterSpacing: 0.5,
    },
  },
  shape: {
    borderRadius: 8,
  },

  overrides: {
    // Surfaces
    MuiAppBar: {
      root: {
        backgroundColor: COLOR_BLACK,
      },
      colorPrimary: {
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
    MuiPaper: {
      root: {
        '&.MuiCard-root': {
          background: 'transparent',
        },
      },
    },
    MuiContainer: {
      root: {
        marginTop: 24,
        marginBottom: 56,
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

    // Card
    MuiCardActionArea: {
      root: {
        '& > a': {
          textDecoration: 'none',
          color: 'inherit',
        },
      },
    },
    MuiCardMedia: {
      root: {
        height: 210,
        borderRadius: 8,
      },
    },
    MuiCardContent: {
      root: {
        padding: 8,
      },
    },

    // Button
    MuiButton: {
      root: {
        paddingTop: 16,
        paddingBottom: 16,
        marginTop: 40,
      },
    },
  },
});

export default theme;
