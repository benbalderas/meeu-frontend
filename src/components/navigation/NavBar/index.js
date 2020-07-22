import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { DRAWER_WIDTH } from 'constants/navigation';

import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  menuButton: {
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${DRAWER_WIDTH}px)`,
      marginLeft: DRAWER_WIDTH,
    },
  },
  appBarTitle: {
    flexGrow: 1,
  },
}));

function NavBar({ onClick, screenTitle, children, isMain, onSearchClick }) {
  const classes = useStyles();

  return (
    <AppBar position="fixed" elevation={0} className={classes.appBar}>
      <Toolbar>
        <IconButton
          aria-label="open drawer"
          edge="start"
          onClick={onClick}
          className={isMain ? classes.menuButton : ''}
        >
          {children}
        </IconButton>

        <Typography variant="h6" noWrap className={classes.appBarTitle}>
          {screenTitle}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
