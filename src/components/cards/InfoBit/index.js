import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Typography, Card, CardContent } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  infoBit: {
    position: 'relative',
    minWidth: 0,
  },
  bitContent: {
    display: 'flex',
    '& > *:first-child': {
      marginRight: theme.spacing(1),
    },
  },
}));

export default function InfoBit({ text }) {
  const classes = useStyles();

  return (
    <Card className={classes.infoBit} elevation={0} variant="outlined">
      <CardContent className={classes.bitContent}>
        <Typography variant="h4" color="primary">
          "
        </Typography>
        <Typography variant="body1">{text}</Typography>
      </CardContent>
    </Card>
  );
}
