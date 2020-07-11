import React from 'react';

import { Container, Grid, Box } from '@material-ui/core';
import MuseumCard from 'components/cards/MuseumCard';

export default function MuseumGrid() {
  return (
    <Box mt={3} mb={5}>
      <Container>
        <Grid container spacing={3}>
          <MuseumCard
            name="Musée du Louvre"
            image="https://source.unsplash.com/WR5_Ev_bh-I/456x600"
            city="Paris"
            countryCode="FR"
          />
          <MuseumCard
            name="Metropolitan Museum of Art"
            image="https://source.unsplash.com/XFvw2-XoZcw/456x600"
            city="New York"
            countryCode="US"
          />
          <MuseumCard
            name="British Museum"
            image="https://source.unsplash.com/SCXlTmy6EWA/456x600"
            city="London"
            countryCode="UK"
          />
          <MuseumCard
            name="The Guggenheim Museum"
            image="https://source.unsplash.com/7d_cEOLPd78/456x600"
            city="New York"
            countryCode="US"
          />
          {/* https://i.pinimg.com/564x/84/07/b3/8407b3a1cd6327c9f27ebcbed6155b1e.jpg */}
          <MuseumCard
            name="Palacio de Bellas Artes"
            image="https://source.unsplash.com/ny8NHXepNV8/456x600"
            city="Mexico City"
            countryCode="MX"
          />
          <MuseumCard
            name="Horta Museum"
            image="https://i.pinimg.com/564x/84/07/b3/8407b3a1cd6327c9f27ebcbed6155b1e.jpg"
            city="Brussels"
            countryCode="BE"
          />
        </Grid>
      </Container>
    </Box>
  );
}
