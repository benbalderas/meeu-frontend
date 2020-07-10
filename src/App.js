import React from 'react';
import { useLocation } from 'react-router-dom';
import './App.css';
import theme from 'theme';

import { ThemeProvider, CssBaseline } from '@material-ui/core';

import getScreenTitle from 'helpers/router';
import MainNav from 'components/navigation/MainNav';
import Routes from 'Routes';

function App() {
  const location = useLocation();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <MainNav screenTitle={getScreenTitle(location.pathname)}>
          <Routes />
        </MainNav>
      </div>
    </ThemeProvider>
  );
}

export default App;
