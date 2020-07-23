import React from 'react';
import { useLocation } from 'react-router-dom';

import 'App.css';
import { getTheme } from 'theme';
import { ThemeProvider, CssBaseline } from '@material-ui/core';

import getScreenTitle from 'helpers/router';
import ConditionalWrapper from 'components/wrappers/ConditionalWrapper';
import MainNav from 'components/navigation/MainNav';
import Routes from 'Routes';

function App() {
  const appTheme = getTheme({
    paletteType: 'dark',
  });
  const location = useLocation();
  const landingPages =
    location.pathname !== '/login' &&
    location.pathname !== '/signup' &&
    location.pathname !== '/';

  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline />

      <div className="App">
        <ConditionalWrapper
          condition={landingPages}
          wrapper={(children) => (
            <MainNav screenTitle={getScreenTitle(location.pathname)}>
              {children}
            </MainNav>
          )}
        >
          <>
            <Routes />
          </>
        </ConditionalWrapper>
      </div>
    </ThemeProvider>
  );
}

export default App;
