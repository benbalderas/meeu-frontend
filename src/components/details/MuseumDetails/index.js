import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory, useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { fetchSingleMuseum } from 'redux/MuseumsDuck';
import { fetchExhibits } from 'redux/ExhibitsDuck';
import { denormalizeData } from 'helpers/formatters';

import { Container, Grid, Typography, Box, Button } from '@material-ui/core';
import KeyboardBackspaceOutlinedIcon from '@material-ui/icons/KeyboardBackspaceOutlined';
import NavBar from 'components/navigation/NavBar';
import ExhibitCard from 'components/cards/ExhibitCard';
import Skeleton from '@material-ui/lab/Skeleton';

const useStyles = makeStyles((theme) => ({
  title: {
    [theme.breakpoints.down('sm')]: {
      hyphens: 'manual',
      fontSize: '2.25rem',
    },
  },
  image: {
    borderRadius: theme.shape.borderRadius - 2,
    width: '100%',
    height: 500,
    objectFit: 'cover',
    [theme.breakpoints.down('sm')]: {
      height: 200,
    },
  },
  countryFlag: {
    marginTop: 4,
    marginLeft: 12,
    width: 24,
  },
}));

export default function MuseumDetails() {
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();
  const { id } = useParams();

  // State selectors
  const museum = useSelector((state) => state.museums.items);
  const exhibits = useSelector((state) =>
    denormalizeData(state.exhibits.items)
  );

  useEffect(() => {
    dispatch(fetchSingleMuseum(id));
    dispatch(fetchExhibits(id));
  }, [dispatch, id]);

  // Handlers
  const handleBackClick = () => {
    history.goBack();
  };

  return (
    <>
      <NavBar screenTitle="" onClick={handleBackClick}>
        <KeyboardBackspaceOutlinedIcon />
      </NavBar>

      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item lg={5} sm={12}>
            {museum.image ? (
              <img
                className={classes.image}
                src={museum.image}
                alt={museum.name}
              />
            ) : (
              <Skeleton
                className={classes.image}
                animation="wave"
                variant="rect"
              />
            )}
          </Grid>

          <Grid item lg={6} sm={12}>
            <Box mb={3}>
              <Typography className={classes.title} gutterBottom variant="h3">
                {museum.name ? (
                  museum.name
                ) : (
                  <Skeleton animation="wave" height={92} />
                )}
              </Typography>

              {museum.city ? (
                <Box mt={4} display="flex" alignItems="center">
                  <Typography variant="subtitle2" color="textSecondary">
                    {museum.city} |
                  </Typography>

                  <Typography variant="subtitle2">
                    <span role="img">
                      <img
                        className={classes.countryFlag}
                        src={`https://www.countryflags.io/${museum.countryCode}/flat/48.png`}
                        alt={museum.countryCode}
                      />
                    </span>
                  </Typography>
                </Box>
              ) : (
                <Skeleton animation="wave" />
              )}
            </Box>

            <Typography variant="body2" color="textSecondary">
              {museum.description ? (
                museum.description
              ) : (
                <>
                  <Skeleton
                    animation="wave"
                    height={20}
                    style={{ marginBottom: 6 }}
                  />
                  <Skeleton animation="wave" height={20} width="80%" />
                </>
              )}
            </Typography>
          </Grid>
        </Grid>

        <Box ml={1} mt={6} mb={2}>
          <Typography variant="subtitle1" color="textSecondary">
            Current Exhibitions
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {exhibits.length > 0 ? (
            exhibits.map((exhibit, index) => (
              <ExhibitCard key={index} {...exhibit} />
            ))
          ) : (
            <Box ml={3} mt={1}>
              <Typography gutterBottom variant="body1" color="textPrimary">
                Hmm… looks like this museum has no current exhibitions
              </Typography>

              <Button disableElevation variant="outlined" component={Link} to="/museums">
                See other museums
              </Button>
            </Box>
          )}
        </Grid>
      </Container>
    </>
  );
}
