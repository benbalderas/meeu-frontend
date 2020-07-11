import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import { Container, Grid, Typography, Button, Box } from '@material-ui/core';
import KeyboardBackspaceOutlinedIcon from '@material-ui/icons/KeyboardBackspaceOutlined';
import NavBar from 'components/navigation/NavBar';

const useStyles = makeStyles((theme) => ({
  image: {
    borderRadius: theme.shape.borderRadius,
    width: '100%',
    objectFit: 'cover',
    [theme.breakpoints.down('sm')]: {
      height: 200,
    },
  },
}));

export default function MuseumDetails() {
  const history = useHistory();
  const classes = useStyles();

  const handleBackClick = () => {
    history.goBack();
  };

  return (
    <>
      <NavBar screenTitle={null} onClick={handleBackClick}>
        <KeyboardBackspaceOutlinedIcon />
      </NavBar>

      <Container maxWidth="md">
        <Grid container spacing={3} alignItems="center">
          <Grid item lg={6} sm={12}>
            <img
              className={classes.image}
              src="https://source.unsplash.com/WR5_Ev_bh-I/608x800"
              alt="museum"
            />
          </Grid>

          <Grid item lg={6} sm={12}>
            <Box mb={3}>
              <Typography gutterBottom variant="h3">
                Musée du Louvre
              </Typography>

              <Box display="flex" alignItems="center">
                <Typography variant="subtitle2" color="textSecondary">
                  Paris —{' '}
                </Typography>

                <Typography variant="subtitle2">
                  <span role="img" aria-label="france">
                    &nbsp;🇫🇷
                  </span>
                </Typography>
              </Box>
            </Box>

            <Typography variant="body2" color="textSecondary">
              The Louvre, or the Louvre Museum, is the world's largest art
              museum and a historic monument in Paris, France. A central
              landmark of the city, it is located on the Right Bank of the Seine
              in the city's 1st arrondissement. The museum is housed in the
              Louvre Palace, originally built as the Louvre castle in the late
              12th to 13th century under Philip II. Remnants of the fortress are
              visible in the basement of the museum.
            </Typography>

            <Button fullWidth variant="contained">
              Experience
            </Button>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
