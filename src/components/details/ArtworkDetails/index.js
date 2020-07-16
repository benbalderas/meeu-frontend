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

export default function ArtworkDetails() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();

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
          <Grid item md={6} lg={6} sm={12}></Grid>
        </Grid>
      </Container>
    </>
  );
}
