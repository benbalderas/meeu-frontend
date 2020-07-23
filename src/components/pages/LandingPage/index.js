import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import { Typography, Container, Box, Button } from '@material-ui/core';
import HeroImage from 'images/hero-image.png';

const useStyles = makeStyles((theme) => ({
  hero: {
    height: '80vh',
    paddingBottom: theme.spacing(5),
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
    position: 'relative',
    width: '50%',
    height: 800,
    backgroundImage: `url(${HeroImage})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '684px 750px',

    [theme.breakpoints.down('xs')]: {
      width: '100%',
      height: 400,
      marginTop: theme.spacing(1),
      backgroundSize: '100%',
    },
  },
  quote: {
    maxWidth: 440,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    margin: 'auto',
    '& > *:first-child': {
      marginRight: theme.spacing(2),
      color: '#FFCC3E',
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
          <Typography variant="h1">
            Shocking facts from your favorite art.
          </Typography>

          <Typography variant="body1" color="textSecondary">
            Discover dozens of artworks—from the top museums in the world to
            your desktop or phone.
          </Typography>

          <Button
            disableElevation
            variant="contained"
            color="primary"
            fullWidth={mobile}
            component={Link}
            to="/signup"
          >
            Start now
          </Button>
        </Box>

        <Box className={classes.image}>
          <Box className={classes.quote} display="flex">
            <Typography variant="h4">"</Typography>

            <Typography variant="caption" color="textSecondary">
              Van Gogh’s hallucinations, likely caused by digoxin toxicity, may
              have contributed to his unusually beautiful use of color in his
              paintings.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
