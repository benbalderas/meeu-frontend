import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, useLocation } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import {
  Drawer,
  Hidden,
  Avatar,
  CardHeader,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  IconButton,
} from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

import { DRAWER_WIDTH } from 'constants/navigation';

const useStyles = makeStyles((theme) => ({
  navLink: {
    textDecoration: 'none',
    color: 'inherit',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: DRAWER_WIDTH,
      flexShrink: 0,
    },
  },
  drawerPaper: {
    width: DRAWER_WIDTH,
  },
}));

export default function NavDrawer({
  window,
  userName,
  userAvatar,
  userType,
  open,
  handleDrawer,
  sections,
}) {
  const classes = useStyles();
  const theme = useTheme();
  const location = useLocation();

  const drawer = (
    <div>
      <Toolbar />
      <CardHeader
        avatar={<Avatar alt={userName} src={userAvatar} />}
        title={userName}
        subheader={userType}
        action={
          <IconButton aria-label="settings">
            <ArrowDropDownIcon />
          </IconButton>
        }
        classes={{
          title: 'MuiTypography-subtitle1',
        }}
      />

      <List>
        {sections.map((section) => (
          <NavLink
            to={`/${section.name.toLowerCase()}`}
            className={classes.navLink}
            key={section.name}
          >
            <ListItem
              button
              key={section.name}
              selected={location.pathname.includes(section.name.toLowerCase())}
              onClick={open ? handleDrawer : () => {}}
            >
              <ListItemIcon>{section.icon}</ListItemIcon>
              <ListItemText
                primary={section.name}
                primaryTypographyProps={{
                  variant: 'body2',
                  color: 'textPrimary',
                }}
              />
            </ListItem>
          </NavLink>
        ))}
      </List>

      {/* TODO: Add logo */}
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <nav className={classes.drawer} aria-label="navigation options">
      <Hidden smUp implementation="css">
        <Drawer
          container={container}
          variant="temporary"
          anchor={theme.direction === 'rtl' ? 'right' : 'left'}
          open={open}
          onClose={handleDrawer}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {drawer}
        </Drawer>
      </Hidden>

      <Hidden xsDown implementation="css">
        <Drawer
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="permanent"
          open
        >
          {drawer}
        </Drawer>
      </Hidden>
    </nav>
  );
}

NavDrawer.propTypes = {
  userName: PropTypes.string,
  userAvatar: PropTypes.string,
  userType: PropTypes.string,
  open: PropTypes.bool,
  handleDrawer: PropTypes.func,
  sections: PropTypes.arrayOf(PropTypes.object),
};

NavDrawer.defaultProps = {
  userName: 'User',
  userAvatar: 'U',
  userType: 'Influencer',
  open: false,
  handleDrawer: () => null,
  sections: [
    {
      name: 'Campaigns',
    },
  ],
};
