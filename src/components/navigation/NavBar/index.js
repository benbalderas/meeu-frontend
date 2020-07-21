import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { DRAWER_WIDTH } from 'constants/navigation';

import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

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

function NavBar({ onClick, screenTitle, children, isMain, onLogout }) {
  const classes = useStyles();

  const handleSearchClick = () => {};

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

        {isMain && (
          // TODO: Add searchbox https://material-ui.com/components/app-bar/#app-bar-with-search-field
          <IconButton edge="end" color="inherit" onClick={handleSearchClick}>
            <SearchIcon />
          </IconButton>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
