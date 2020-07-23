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
      fontFamily: 'obviously-condensed, sans-serif',
      fontWeight: 800,
      fontStyle: 'normal',
      fontSize: '7.5rem',
      lineHeight: 1,
      marginBottom: 40,
      '@media (max-width:600px)': {
        fontSize: '5rem',
      },
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
      fontSize: '2.75rem',
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
      fontSize: '1rem',
      lineHeight: 1.125,
    },
    body2: {
      lineHeight: 2,
    },
    body1: {
      lineHeight: 2,
    },
    caption: {
      fontFamily: 'obviously, sans-serif',
      fontWeight: 400,
      fontSize: '0.875rem',
      lineHeight: 1.8,
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
    MuiToolbar: {
      root: {
        '& > .MuiButton-root': {
          marginTop: 0,
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
        marginTop: 8,
      },
      contained: {
        marginTop: 40,
      },
    },
    MuiChip: {
      root: {
        paddingBottom: 4,
        borderRadius: 6,
      },
    },
    MuiFab: {
      label: {
        lineHeight: 1,
      },
    },

    // Form
    MuiFormControl: {
      root: {
        marginTop: 24,
      },
    },
    MuiInputLabel: {
      formControl: {
        left: 4,
      },
    },
    MuiInput: {
      root: {
        padding: 4,
      },
    },
    MuiFormHelperText: {
      root: {
        marginTop: 8,
        fontFamily: 'obviously, sans-serif',
        fontSize: '0.75rem',
      },
    },

    // Typography
    MuiTypography: {
      gutterBottom: {
        marginBottom: '1rem',
      },
    },
  },
});

// Custom shadows
theme.shadows[6] =
  'box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);';

export default theme;
