import { createMuiTheme } from '@material-ui/core/styles';

const black = '#121212';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    background: {
      default: black,
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
  },
});

export default theme;
