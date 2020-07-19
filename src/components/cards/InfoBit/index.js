import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Typography, Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  bitContent: {
    display: 'flex',
    flexDirection: 'column',
  },
}));

export default function InfoBit({ text }) {
  const classes = useStyles();

  return (
    <Box className={classes.bitContent}>
      <Typography variant="h5">{text}</Typography>
      <Typography variant="h6" color="primary">
        —
      </Typography>
    </Box>
  );
}
