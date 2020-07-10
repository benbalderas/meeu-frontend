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
        handleIconClick={handleDrawerToggle}
        isMain
      >
        <MenuIcon />
      </NavBar>

      <NavDrawer
        userAvatar="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=d5849d81af587a09dbcf3f11f6fa122f"
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
