import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Link } from 'react-router-dom';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
  fab: {
    position: 'fixed',
    bottom: theme.spacing(3),
    right: theme.spacing(3),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default function FloatingAction({ label, to }) {
  const classes = useStyles();

  return (
    <Fab
      className={classes.fab}
      variant="extended"
      color="primary"
      component={Link}
      to={to}
    >
      <AddIcon className={classes.extendedIcon} />
      {label}
    </Fab>
  );
}
