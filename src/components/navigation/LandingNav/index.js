import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Logo from 'images/logo.svg';

import { AppBar, Button, Toolbar, Box, IconButton } from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const useStyles = makeStyles((theme) => ({
  bar: {
    justifyContent: 'space-between',
  },
  logo: {
    marginRight: theme.spacing(2),
    borderRadius: 6,
  },
  slogan: {
    flexGrow: 1,
  },
  toolbar: theme.mixins.toolbar,
}));

export default function LandingNav({ children }) {
  const classes = useStyles();
  const user = useSelector((state) => state.user.data);

  return (
    <>
      <AppBar position="fixed" elevation={0} color="transparent">
        <Toolbar>
          <IconButton
            className={classes.logo}
            edge="start"
            component={NavLink}
            to="/"
          >
            <img src={Logo} alt="Meeu" />
          </IconButton>

          <Box className={classes.slogan} />

          {Object.keys(user).length > 0 ? (
            <Button
              component={NavLink}
              to="/museums"
              endIcon={<ArrowForwardIcon />}
            >
              Back to the app
            </Button>
          ) : (
            <>
              <Button
                component={NavLink}
                to="/login"
                activeStyle={{
                  color: '#8d8d8d',
                }}
              >
                Login
              </Button>

              <Button
                color="primary"
                component={NavLink}
                to="/signup"
                activeStyle={{
                  color: '#8d8d8d',
                }}
              >
                Signup
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>

      <Box flexGrow={1}>
        <div className={classes.toolbar} />
        {children}
      </Box>
    </>
  );
}
