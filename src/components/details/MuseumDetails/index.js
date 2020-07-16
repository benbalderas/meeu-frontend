import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { fetchSingleMuseum } from 'redux/MuseumsDuck';

import { Container, Grid, Typography, Box } from '@material-ui/core';
import KeyboardBackspaceOutlinedIcon from '@material-ui/icons/KeyboardBackspaceOutlined';
import NavBar from 'components/navigation/NavBar';
import ExhibitCard from 'components/cards/ExhibitCard';

const useStyles = makeStyles((theme) => ({
  image: {
    borderRadius: theme.shape.borderRadius - 2,
    width: '100%',
    height: 600,
    objectFit: 'cover',
    [theme.breakpoints.down('sm')]: {
      height: 200,
    },
  },
}));

export default function MuseumDetails() {
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();
  const { id } = useParams();
  const museum = useSelector((state) => state.museums.items);

  useEffect(() => {
    dispatch(fetchSingleMuseum(id));
  }, [dispatch, id]);

  const handleBackClick = () => {
    history.goBack();
  };

  return (
    <>
      <NavBar screenTitle="" onClick={handleBackClick}>
        <KeyboardBackspaceOutlinedIcon />
      </NavBar>

      <Container maxWidth="xl">
        <Grid container spacing={3} alignItems="center">
          <Grid item lg={4} sm={12}>
            <img
              className={classes.image}
              src={museum.image}
              alt={museum.name}
            />
          </Grid>

          <Grid item lg={4} sm={12}>
            <Box mb={3}>
              <Typography gutterBottom variant="h3">
                {museum.name}
              </Typography>

              <Box display="flex" alignItems="center">
                <Typography variant="subtitle2" color="textSecondary">
                  {museum.city} —{' '}
                </Typography>

                <Typography variant="subtitle2">
                  <span role="img" aria-label="france">
                    &nbsp;🇫🇷
                  </span>
                </Typography>
              </Box>
            </Box>

            <Typography variant="body2" color="textSecondary">
              {museum.description}
            </Typography>
          </Grid>

          <Grid item lg={4} sm={12}></Grid>
        </Grid>
      </Container>
    </>
  );
}
