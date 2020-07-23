import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';

const useStyles = makeStyles((theme) => ({
  details: {
    display: 'flex',
    alignItems: 'center',
  },
  content: {
    flex: '1 0 auto',
    width: '45%',
    marginLeft: theme.spacing(2),
  },
  image: {
    width: '45%',
  },
}));

export default function ArtworkCard({ _id, image, title, author }) {
  const status = useSelector((state) => state.artworks?.status);
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={12} md={6} lg={4}>
      <Card elevation={0}>
        <CardActionArea>
          <Link className={classes.details} to={`/artworks/${_id}`}>
            {status === 'pending' ? (
              <Skeleton
                animation="wave"
                variant="rect"
                width="45%"
                height={210}
              />
            ) : (
              <CardMedia
                className={classes.image}
                image={image}
                title={title}
              />
            )}

            <CardContent className={classes.content}>
              <Typography gutterBottom variant="h5" component="h2">
                {status === 'pending' ? <Skeleton /> : title}
              </Typography>

              <Typography variant="caption" color="textSecondary" component="p">
                {status === 'pending' ? <Skeleton /> : author}
              </Typography>
            </CardContent>
          </Link>
        </CardActionArea>
      </Card>
    </Grid>
  );
}
