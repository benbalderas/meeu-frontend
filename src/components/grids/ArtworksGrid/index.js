import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchArtworks } from 'redux/ArtworksDuck';
import { denormalizeData } from 'helpers/formatters';

import { Container, Grid, Box } from '@material-ui/core';
import ArtworkCard from 'components/cards/ArtworkCard';

export default function ArtworksGrid() {
  const dispatch = useDispatch();
  const artworks = useSelector((state) => state.artworks.items);

  // executes prev to component mounting
  useEffect(() => {
    dispatch(fetchArtworks());
  }, [dispatch]);

  return (
    <Box mt={3} mb={5}>
      <Container>
        <Grid container spacing={3}>
          {denormalizeData(artworks).map((artwork, index) => (
            <ArtworkCard key={index} {...artwork} />
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
