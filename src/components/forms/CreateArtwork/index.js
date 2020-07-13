import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: 'none',
  },
}));

export default function CreateArtwork() {
  const classes = useStyles();
  const [art, setArt] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(art);
  };

  const handleChange = (event) => {
    const key = event.target.name;
    const value = event.targe.value || event.target.files[0];

    setArt((prevState) => ({ ...prevState, [key]: value }));
  };

  return (
    <Box mt={3} mb={5}>
      <Container maxWidth="xs">
        <Typography gutterBottom variant="h2">
          New Art
        </Typography>

        <Typography gutterBottom variant="h5">
          For: From Refusé to Célébrité
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            name="title"
            id="title"
            label="Title"
            type="text"
            required
          />

          <TextField
            fullWidth
            name="author"
            id="author"
            label="Author"
            type="text"
            required
          />

          <Box mt={3}>
            <input
              name="image"
              accept="image/png, image/jpeg"
              className={classes.input}
              id="file"
              type="file"
            />

            <label htmlFor="contained-button-file">
              <Button fullWidth variant="outlined" component="span">
                Upload image
              </Button>
            </label>

            <input
              accept="image/*"
              className={classes.input}
              id="icon-button-file"
              type="file"
            />
          </Box>

          <TextField
            fullWidth
            name="year"
            id="year"
            label="Year"
            type="number"
            required
          />

          <TextField
            fullWidth
            name="medium"
            id="medium"
            label="Medium"
            type="text"
            required
          />

          <TextField
            fullWidth
            name="description"
            id="desc"
            label="Description"
            type="text"
            multiline
            rows={4}
            required
          />

          <Button fullWidth variant="contained" color="primary" type="submit">
            Create
          </Button>
        </form>
      </Container>
    </Box>
  );
}
