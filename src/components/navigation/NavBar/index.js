import React from 'react';
import PropTypes from 'prop-types';
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

function NavBar({ handleIconClick, screenTitle, children, isMain, onLogout }) {
  const classes = useStyles();

  const handleSearchClick = () => {};

  return (
    <AppBar
      position="fixed"
      color="transparent"
      elevation={0}
      className={classes.appBar}
    >
      <Toolbar>
        <IconButton
          aria-label="open drawer"
          edge="start"
          onClick={handleIconClick}
          className={isMain ? classes.menuButton : ''}
        >
          {children}
        </IconButton>

        <Typography variant="h6" noWrap className={classes.appBarTitle}>
          {screenTitle}
        </Typography>

        {isMain && (
          <IconButton edge="end" color="inherit" onClick={handleSearchClick}>
            <SearchIcon />
          </IconButton>
        )}
      </Toolbar>
    </AppBar>
  );
}

NavBar.propTypes = {
  onLogout: PropTypes.func,
  handleIconClick: PropTypes.func,
  screenTitle: PropTypes.string,
  children: PropTypes.node,
  isMain: PropTypes.bool,
};

NavBar.defaultProps = {
  onLogout: () => {},
  handleIconClick: () => null,
  screenTitle: '',
  children: <></>,
  isMain: false,
};

export default NavBar;
