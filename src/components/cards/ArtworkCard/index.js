import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  image: {
    width: 151,
  },
}));

export default function ArtworkCard({ _id, image, name, author }) {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={12} md={4} lg={3}>
      <Card elevation={0}>
        <CardActionArea>
          <Link className={classes.details} to={`/museums/${_id}`}>
            <CardContent className={classes.content}>
              <Typography variant="subtitle1" component="h2">
                {name}
              </Typography>

              <Typography variant="body2" color="textSecondary" component="p">
                {author}
              </Typography>
            </CardContent>

            <CardMedia className={classes.image} image={image} title={name} />
          </Link>
        </CardActionArea>
      </Card>
    </Grid>
  );
}
