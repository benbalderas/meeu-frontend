import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import { Typography, Container, Box, Button } from '@material-ui/core';
import HeroImage from 'images/hero-image.png';

const useStyles = makeStyles((theme) => ({
  hero: {
    height: '80vh',
    '& > *:first-child': {
      width: '45%',
      marginRight: '10%',
    },
    [theme.breakpoints.down('xs')]: {
      height: 'auto',
      flexDirection: 'column',
      '& > *:first-child': {
        width: '100%',
        marginRight: 0,
      },
    },
  },
  image: {
    width: '50%',
    height: 800,
    backgroundImage: `url(${HeroImage})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '684px 714px',

    [theme.breakpoints.down('xs')]: {
      width: '100%',
      height: 400,
      marginTop: theme.spacing(1),
      backgroundSize: '100%',
    },
  },
}));

export default function LandingPage() {
  const classes = useStyles();
  const mobile = useMediaQuery('(max-width:600px)');

  return (
    <Container maxWidth="lg">
      <Box
        className={classes.hero}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box>
          <Typography gutterBottom variant="h1">
            Shocking facts from your favorite art.
          </Typography>

          <Typography variant="body1" color="textSecondary">
            Discover dozens of artworks—from the top museums in the world to
            your desktop or phone.
          </Typography>

          <Button variant="contained" color="primary" fullWidth={mobile}>
            Start now
          </Button>
        </Box>

        <Box className={classes.image} />
      </Box>
    </Container>
  );
}
