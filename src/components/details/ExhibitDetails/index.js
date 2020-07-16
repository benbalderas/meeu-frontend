import React, { useEffect } from 'react';
import { format } from 'date-fns';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { fetchSingleExhibit } from 'redux/ExhibitsDuck';
import { fetchArtworks } from 'redux/ArtworksDuck';
import { denormalizeData } from 'helpers/formatters';

import {
  Container,
  Grid,
  Typography,
  Box,
  Chip,
  Divider,
} from '@material-ui/core';
import KeyboardBackspaceOutlinedIcon from '@material-ui/icons/KeyboardBackspaceOutlined';
import NavBar from 'components/navigation/NavBar';
import ArtworkCard from 'components/cards/ArtworkCard';

const useStyles = makeStyles((theme) => ({
  metadata: {
    '& > *:not(:first-child)': {
      marginLeft: theme.spacing(1),
    },
  },
  divider: {
    marginBottom: theme.spacing(5),
  },
}));

export default function ExhibitDetails() {
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();
  const { id } = useParams();

  // State selectors
  const exhibit = useSelector((state) => state.exhibits.items);
  const artworks = useSelector((state) =>
    denormalizeData(state.artworks.items)
  );

  useEffect(() => {
    dispatch(fetchSingleExhibit(id));
    dispatch(fetchArtworks(id));
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

      <Container maxWidth="xl">
        <Grid container spacing={2} alignItems="top">
          <Grid item md={6} lg={6} sm={12}>
            {/* TODO: Add museum name */}
            <Typography variant="h3">{exhibit.title}</Typography>

            <Box
              className={classes.metadata}
              mt={4}
              mb={3}
              display="flex"
              alignItems="center"
            >
              <Chip
                variant="outlined"
                size="small"
                label={exhibit.type}
                color={exhibit.type === 'Temporary' ? 'primary' : 'default'}
              />

              {exhibit.endDate && (
                <Chip
                  variant="outlined"
                  size="small"
                  label={format(
                    new Date(exhibit.endDate.toString()),
                    'MM/dd/yyy'
                  )}
                />
              )}
            </Box>
          </Grid>

          <Grid item md={6} lg={6} sm={12}>
            <Typography variant="body2">{exhibit.description}</Typography>
          </Grid>
        </Grid>

        <Box mt={5}>
          <Divider className={classes.divider} />

          <Grid container spacing={3}>
            {artworks.map((artwork, index) => (
              <ArtworkCard key={index} {...artwork} />
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  );
}
