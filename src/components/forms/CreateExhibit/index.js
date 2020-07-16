import React, { useState, useEffect } from 'react';
import { denormalizeData } from 'helpers/formatters';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMuseums } from 'redux/MuseumsDuck';
import { useHistory } from 'react-router-dom';
import { createExhibit } from 'redux/ExhibitsDuck';

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

export default function CreateExhibit() {
  const dispatch = useDispatch();
  const { push } = useHistory();

  const userId = useSelector((state) => state.user.data._id);
  const status = useSelector((state) => state.artworks.status);
  const adminMuseum = useSelector(
    (state) => denormalizeData(state.museums.items)[0]._id
  );

  useEffect(() => {
    dispatch(fetchMuseums(userId));
  }, [dispatch, userId]);

  const [exhibit, setExhibit] = useState({
    title: '',
    description: '',
    type: '',
    endDate: '',
  });

  const handleChange = (event) => {
    const key = event.target.name;
    const value = event.target.value;

    setExhibit((prevState) => ({ ...prevState, [key]: value }));
    console.log(exhibit);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    exhibit['museum'] = adminMuseum;
    dispatch(createExhibit(exhibit, push));
  };

  const handleBackClick = () => {
    push('/exhibits');
  };

  return (
    <>
      <NavBar screenTitle={null} onClick={handleBackClick}>
        <CloseIcon />
      </NavBar>

      <Box mt={3} mb={5}>
        <Container maxWidth="xs">
          <Typography gutterBottom variant="h2">
            New Exhibit
          </Typography>

          <form onSubmit={handleSubmit}>
            <TextField
              name="title"
              fullWidth
              id="title"
              label="Exhibit Title"
              type="text"
              required
              onChange={handleChange}
            />

            <TextField
              name="description"
              fullWidth
              id="desc"
              label="Description"
              type="text"
              multiline
              rows={4}
              required
              onChange={handleChange}
            />

            <FormControl fullWidth required>
              <InputLabel id="type">Type</InputLabel>

              <Select
                name="type"
                labelId="type"
                value={exhibit.type}
                onChange={handleChange}
              >
                <MenuItem value="Permanent">Permanent</MenuItem>
                <MenuItem value="Temporary">Temporary</MenuItem>
              </Select>
            </FormControl>

            {exhibit.type === 'Temporary' && (
              <TextField
                fullWidth
                name="endDate"
                id="date"
                label="End Date"
                type="date"
                defaultValue="2020-08-24"
                onChange={handleChange}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            )}

            <Button fullWidth variant="contained" color="primary" type="submit">
              Create
            </Button>
          </form>
        </Container>
      </Box>
    </>
  );
}
