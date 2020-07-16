import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory, useParams, Link } from 'react-router-dom';
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
  Button,
} from '@material-ui/core';
import KeyboardBackspaceOutlinedIcon from '@material-ui/icons/KeyboardBackspaceOutlined';
import NavBar from 'components/navigation/NavBar';

export default function ExhibitDetails() {
  return (
    <>
      <NavBar screenTitle="" onClick={handleBackClick}>
        <KeyboardBackspaceOutlinedIcon />
      </NavBar>

      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item md={6} lg={6} sm={12}>
            <Typography variant="h4">Exhibition Name</Typography>

            <Box display="flex" alignItems="center">
              <Chip variant="outlined" size="small" label="Temporary" />
              <Typography variant="h4">Until: Date</Typography>
            </Box>

            <Typography variant="body2">Description</Typography>
          </Grid>

          <Grid item md={6} lg={6} sm={12}>
            Artworks
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
