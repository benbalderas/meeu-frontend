import React from 'react';

import { Container, Grid, Typography, Button } from '@material-ui/core';
import KeyboardBackspaceOutlinedIcon from '@material-ui/icons/KeyboardBackspaceOutlined';
import NavBar from 'components/navigation/NavBar';

export default function MuseumDetails() {
  return (
    <>
      <NavBar screenTitle="Metropolitan Museum">
        <KeyboardBackspaceOutlinedIcon />
      </NavBar>

      <Container>
        <Grid container>
          <Grid item></Grid>
        </Grid>
      </Container>
    </>
  );
}
