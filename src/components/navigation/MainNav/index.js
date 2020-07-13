import React, { useState } from 'react';
import { useSelector } from 'react-redux';
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
        userAvatar={
          user
            ? user.avatar
            : 'https://cdn.glitch.com/9c389208-b279-4e96-bcbc-e5f8712d8706%2Fplaceholder-landscape-med.png'
        }
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

MainNav.propTypes = {
  children: PropTypes.node,
  screenTitle: PropTypes.string,
};

MainNav.defaultProps = {
  children: <h2>No data to show</h2>,
  screenTitle: '',
};
