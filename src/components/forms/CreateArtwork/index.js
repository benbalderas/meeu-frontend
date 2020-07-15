import React, { useState, useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { createArtwork } from 'redux/ArtworksDuck';
import { denormalizeData } from 'helpers/formatters';
import { fetchMuseums } from 'redux/MuseumsDuck';
import { fetchExhibits } from 'redux/ExhibitsDuck';
import { makeStyles } from '@material-ui/core/styles';

import {
  Container,
  Box,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from '@material-ui/core';

import CloseIcon from '@material-ui/icons/Close';
import NavBar from 'components/navigation/NavBar';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: 'none',
  },
  preview: {
    width: '100%',
    marginTop: theme.spacing(2),
    borderRadius: 16,
  },
}));

export default function CreateArtwork() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { push, goBack } = useHistory();

  // Component states
  const [art, setArt] = useState({
    exhibit: '',
    title: '',
    author: '',
    image: '',
    year: '',
    medium: '',
    description: '',
  });
  const [filePreview, setFilePreview] = useState('');

  // States from store
  const userId = useSelector((state) => state.user.data._id);
  const adminMuseum = useSelector(
    (state) => denormalizeData(state.museums.items)[0]._id
  );

  useLayoutEffect(() => {
    dispatch(fetchMuseums(userId));
    dispatch(fetchExhibits(adminMuseum));
  }, [dispatch, userId, adminMuseum]);

  const adminMuseumExhibits = useSelector((state) =>
    denormalizeData(state.exhibits.items)
  );

  // Handlers
  const handleChange = (event) => {
    const key = event.target.name;
    const value = event.target.files || event.target.value;

    setArt((prevState) => ({ ...prevState, [key]: value }));

    if (event.target.name === 'image')
      setFilePreview(URL.createObjectURL(event.target.files[0]));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();

    for (let key in art) {
      if (key === 'image') {
        formData.append(key, art[key][0]);
      } else {
        formData.append(key, art[key]);
      }
    }

    dispatch(createArtwork(formData, push));
  };

  const handleBackClick = () => {
    goBack();
  };

  return (
    <>
      <NavBar screenTitle={null} onClick={handleBackClick}>
        <CloseIcon />
      </NavBar>

      <Box mt={3} mb={5}>
        <Container maxWidth="xs">
          <Typography gutterBottom variant="h2">
            New Art
          </Typography>

          {adminMuseumExhibits.length === 0 ? (
            <>
              <Typography gutterBottom variant="h4">
                No exhibits yet
              </Typography>

              <Typography gutterBottom variant="body1">
                To create an artwork you must first create an exhibit
              </Typography>
            </>
          ) : (
            <form onSubmit={handleSubmit}>
              <FormControl fullWidth required>
                <InputLabel id="exhibit">Exhibit</InputLabel>

                <Select
                  name="exhibit"
                  labelId="exhibit"
                  value={art.exhibit}
                  onChange={handleChange}
                >
                  {adminMuseumExhibits.map((exhibit, key) => (
                    <MenuItem value={exhibit._id} key={key}>
                      {exhibit.title}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <TextField
                fullWidth
                name="title"
                id="title"
                label="Title"
                type="text"
                required
                onChange={handleChange}
              />

              <TextField
                fullWidth
                name="author"
                id="author"
                label="Author"
                type="text"
                required
                onChange={handleChange}
              />

              <Box mt={3}>
                <input
                  name="image"
                  accept="image/png, image/jpeg"
                  className={classes.input}
                  id="file"
                  type="file"
                  onChange={handleChange}
                />

                {art.image && (
                  <img
                    className={classes.preview}
                    src={filePreview}
                    alt="preview"
                  />
                )}

                <label htmlFor="file">
                  <Button fullWidth variant="outlined" component="span">
                    {art.image ? 'Replace Image' : 'Add Image'}
                  </Button>
                </label>
              </Box>

              <TextField
                fullWidth
                name="year"
                id="year"
                label="Year"
                type="number"
                required
                onChange={handleChange}
              />

              <TextField
                fullWidth
                name="medium"
                id="medium"
                label="Medium"
                type="text"
                required
                onChange={handleChange}
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
                onChange={handleChange}
              />

              <Button
                fullWidth
                variant="contained"
                color="primary"
                type="submit"
              >
                Create
              </Button>
            </form>
          )}
        </Container>
      </Box>
    </>
  );
}
