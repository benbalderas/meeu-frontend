import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMuseums } from 'redux/MuseumsDuck';
import { denormalizeData } from 'helpers/formatters';

import { Container, Grid, Box } from '@material-ui/core';
import MuseumCard from 'components/cards/MuseumCard';

export default function MuseumGrid() {
  const dispatch = useDispatch();
  const museums = useSelector((state) => state.museums.items);

  // executes prev to component mounting
  useEffect(() => {
    dispatch(fetchMuseums());
  }, [dispatch]);
  // empty brakets prevent useEffect from being executed constantly
  // a value can be passed inside, and that would make the useEffect execute each time the value changes, E.g. id

  return (
    <Box mt={3} mb={5}>
      <Container>
        <Grid container spacing={3}>
          {denormalizeData(museums).map((museum, index) => (
            <MuseumCard key={index} {...museum} />
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
