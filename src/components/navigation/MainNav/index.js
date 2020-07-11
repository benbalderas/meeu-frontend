import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import { SECTIONS } from 'constants/navigation';
import Box from '@material-ui/core/Box';
import MenuIcon from '@material-ui/icons/Menu';
import NavDrawer from 'components/navigation/NavDrawer';
import NavBar from 'components/navigation/NavBar';

const useStyles = makeStyles((theme) => ({
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
}));

function MainNav({ children, screenTitle }) {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box display="flex">
      <NavBar
        screenTitle={screenTitle}
        onClick={handleDrawerToggle}
        isMain
      >
        <MenuIcon />
      </NavBar>

      <NavDrawer
        userAvatar="https://images.unsplash.com/photo-1554384645-13eab165c24b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
        userName="Yuna Oluna"
        userType="Visitor"
        handleDrawer={handleDrawerToggle}
        open={mobileOpen}
        sections={SECTIONS}
      />

      <Box flexGrow={1}>
        <div className={classes.toolbar} />
        {children}
      </Box>
    </Box>
  );
}

export default MainNav;

MainNav.propTypes = {
  children: PropTypes.node,
  screenTitle: PropTypes.string,
};

MainNav.defaultProps = {
  children: <h2>No data to show</h2>,
  screenTitle: '',
};
