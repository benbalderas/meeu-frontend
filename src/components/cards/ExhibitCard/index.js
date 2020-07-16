import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import {
  Grid,
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Box,
  Chip,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  metaData: {
    '& > *:not(:first-child)': {
      marginLeft: theme.spacing(1),
    },
  },
  description: {
    display: '-webkit-box',
    boxOrient: 'vertical',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    lineClamp: 3,
  },
}));

export default function ExhibitCard({
  _id,
  title,
  type,
  description,
}) {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6} md={6} lg={4}>
      <Card elevation={0}>
        <CardActionArea>
          <Link to={`/exhibits/${_id}`}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {title}
              </Typography>

              <Box
                className={classes.metaData}
                mb={2}
                mt={3}
                display="flex"
                alignItems="center"
              >
                <Chip
                  variant="outlined"
                  size="small"
                  label={type}
                  color={type === 'Temporary' ? "primary" : "default"}
                />
              </Box>

              <Typography
                className={classes.description}
                variant="body2"
                color="textSecondary"
                component="p"
              >
                {description}
              </Typography>
            </CardContent>
          </Link>
        </CardActionArea>
      </Card>
    </Grid>
  );
}
