import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

import { SECTIONS } from 'constants/navigation';
import Box from '@material-ui/core/Box';
import MenuIcon from '@material-ui/icons/Menu';
import NavDrawer from 'components/navigation/NavDrawer';
import NavBar from 'components/navigation/NavBar';
import DefaultAvatar from 'images/default-avatar.png';

const useStyles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
}));

function MainNav({ children, screenTitle }) {
  const user = useSelector((state) => state.user.data);
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box display="flex">
      <NavBar screenTitle={screenTitle} onClick={handleDrawerToggle} isMain>
        <MenuIcon />
      </NavBar>

      <NavDrawer
        userAvatar={user ? user.avatar : DefaultAvatar}
        userName={user ? user.name : 'Name'}
        userType={user ? user.role : ''}
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
