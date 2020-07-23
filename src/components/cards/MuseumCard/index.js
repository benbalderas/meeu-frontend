import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';

export default function MuseumCard({
  _id,
  image,
  name,
  city,
  countryCode,
  fullWidth,
}) {
  const status = useSelector((state) => state.museums?.status);

  return (
    <Grid
      item
      xs={fullWidth ? 12 : 6}
      sm={fullWidth ? 12 : 6}
      md={fullWidth ? 12 : 4}
      lg={fullWidth ? 12 : 3}
    >
      <Card elevation={0}>
        <CardActionArea>
          <Link to={`/museums/${_id}`}>
            {status === 'pending' ? (
              <Skeleton animation="wave" variant="rect" height={210} />
            ) : (
              <CardMedia image={image} title={name} />
            )}

            <CardContent>
              <Typography variant="subtitle1" component="h2">
                {status === 'pending' ? <Skeleton /> : name}
              </Typography>

              <Typography variant="body2" color="textSecondary" component="p">
                {status === 'pending' ? (
                  <Skeleton />
                ) : (
                  `${city}, ${countryCode}`
                )}
              </Typography>
            </CardContent>
          </Link>
        </CardActionArea>
      </Card>
    </Grid>
  );
}
