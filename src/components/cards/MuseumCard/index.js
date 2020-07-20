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

export default function MuseumCard({
  _id,
  image,
  name,
  city,
  countryCode,
  fullWidth,
}) {
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
            <CardMedia image={image} title={name} src="" />

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
