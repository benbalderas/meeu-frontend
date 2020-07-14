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
    alignItems: 'center',
  },
  content: {
    flex: '1 0 auto',
    width: '45%',
    marginLeft: theme.spacing(3),
  },
  image: {
    width: '45%',
  },
}));

export default function ArtworkCard({ _id, image, title, author }) {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={12} md={6} lg={4}>
      <Card elevation={0}>
        <CardActionArea>
          <Link className={classes.details} to={`/museums/${_id}`}>
            <CardMedia className={classes.image} image={image} title={title} />

            <CardContent className={classes.content}>
              <Typography gutterBottom variant="h5" component="h2">
                {title}
              </Typography>

              <Typography variant="caption" color="textSecondary" component="p">
                {author}
              </Typography>
            </CardContent>
          </Link>
        </CardActionArea>
      </Card>
    </Grid>
  );
}
