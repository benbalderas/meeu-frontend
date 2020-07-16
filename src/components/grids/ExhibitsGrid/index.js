import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchExhibits } from 'redux/ExhibitsDuck';
import { denormalizeData } from 'helpers/formatters';

import { Container, Grid, Box } from '@material-ui/core';
import ExhibitCard from 'components/cards/ExhibitCard';
import FloatingAction from 'components/buttons/FloatingAction';

export default function ExhibitsGrid() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.data);
  const exhibits = useSelector((state) => state.exhibits.items);

  useEffect(() => {
    dispatch(fetchExhibits());
  }, [dispatch]);

  return (
    <>
      <Box mt={3} mb={5}>
        <Container>
          <Grid container spacing={3}>
            {denormalizeData(exhibits).map((exhibit, index) => (
              <ExhibitCard key={index} {...exhibit} />
            ))}
          </Grid>
        </Container>
      </Box>

      {user.role === 'Admin' && (
        <FloatingAction to="exhibits/create" label="Add Exhibit" />
      )}
    </>
  );
}
