import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

import 'App.css';
import { getTheme } from 'theme';
import { ThemeProvider, CssBaseline } from '@material-ui/core';
import { fetchTheme } from 'redux/ThemeDuck';

import getScreenTitle from 'helpers/router';
import ConditionalWrapper from 'components/wrappers/ConditionalWrapper';
import MainNav from 'components/navigation/MainNav';
import Routes from 'Routes';

function App() {
  const dispatch = useDispatch();
  const location = useLocation();
  const landingPages =
    location.pathname !== '/login' &&
    location.pathname !== '/signup' &&
    location.pathname !== '/';

  const currentTheme = useSelector((state) => state.theme.mode);
  const theme = getTheme({
    paletteType: currentTheme,
  });

  useEffect(() => {
    dispatch(fetchTheme());
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
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
