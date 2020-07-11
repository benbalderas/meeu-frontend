import React from 'react';

import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from '@material-ui/core';

export default function MuseumCard({
  image,
  name,
  city,
  countryCode,
  onClick,
}) {
  return (
    <Grid item xs={6} sm={6} md={4} lg={3}>
      <Card elevation={0}>
        <CardActionArea onClick={onClick}>
          <CardMedia image={image} title={name} />

          <CardContent>
            <Typography variant="subtitle1" component="h2">
              {name}
            </Typography>

            <Typography variant="body2" color="textSecondary" component="p">
              {`${city}, ${countryCode}`}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}
