import React from 'react';
import { useHistory } from 'react-router-dom';

import {
  Container,
  Box,
  Typography,
  Button,
  TextField,
  Avatar,
} from '@material-ui/core';

import CloseIcon from '@material-ui/icons/Close';
import NavBar from 'components/navigation/NavBar';

export default function UserDetails() {
  const history = useHistory();

  // Handlers
  const handleBackClick = () => {
    history.goBack();
  };

  return (
    <>
      <NavBar screenTitle="Settings" onClick={handleBackClick}>
        <CloseIcon />
      </NavBar>

      <Container>
        <Box></Box>
      </Container>
    </>
  );
}
