import React from 'react';
import { Link } from 'react-router-dom';

import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from '@material-ui/core';

export default function MuseumCard({ image, name, city, countryCode }) {
  return (
    <Grid item xs={6} sm={6} md={4} lg={3}>
      <Card elevation={0}>
        <CardActionArea>
          <Link to="/museums/1">
            <CardMedia image={image} title={name} />

            <CardContent>
              <Typography variant="subtitle1" component="h2">
                {name}
              </Typography>

              <Typography variant="body2" color="textSecondary" component="p">
                {`${city}, ${countryCode}`}
              </Typography>
            </CardContent>
          </Link>
        </CardActionArea>
      </Card>
    </Grid>
  );
}
