import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Logo from 'images/logo.svg';

import { AppBar, Button, Toolbar, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({}));

export default function LandingNav() {
  const classes = useStyles();

  return (
    <AppBar position="fixed" elevation={0}>
      <img src={Logo} src="Meeu" />

      <Toolbar>
        <Button component={Link} to="/login">
          Login
        </Button>

        <Button color="primary" component={Link} to="/Signup">
          Signup
        </Button>
      </Toolbar>
    </AppBar>
  );
}
