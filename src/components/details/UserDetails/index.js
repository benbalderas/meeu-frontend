import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

import { fetchMuseums } from 'redux/MuseumsDuck';
import { userUpdate } from 'redux/UserDuck';
import { denormalizeData } from 'helpers/formatters';

import {
  Container,
  Box,
  Typography,
  Button,
  TextField,
  Avatar,
  CircularProgress,
  Grid,
} from '@material-ui/core';

import CloseIcon from '@material-ui/icons/Close';
import NavBar from 'components/navigation/NavBar';
import MuseumCard from 'components/cards/MuseumCard';

const useStyles = makeStyles((theme) => ({
  input: {
    display: 'none',
  },
  addButton: {
    marginTop: -8,
    marginLeft: 8,
  },
}));

export default function UserDetails() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state) => state.user.data);
  const status = useSelector((state) => state.user.status);
  const myMuseum = useSelector((state) => state.museums.items);

  // States
  const [userData, setUserData] = useState({ ...user });
  const [filePreview, setFilePreview] = useState('');

  useEffect(() => {
    dispatch(fetchMuseums(user._id));
  }, [dispatch, user._id]);

  // Handlers
  const handleChange = (event) => {
    const key = event.target.name;
    const value = event.target.files || event.target.value;

    setUserData((prevState) => ({ ...prevState, [key]: value }));

    if (event.target.name === 'avatar')
      setFilePreview(URL.createObjectURL(event.target.files[0]));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();

    for (let key in userData) {
      if (key === 'avatar') {
        formData.append(key, userData[key][0]);
      } else {
        formData.append(key, userData[key]);
      }
    }

    dispatch(userUpdate(formData, userData._id));
  };

  const handleBackClick = () => {
    history.goBack();
  };

  return (
    <>
      <NavBar screenTitle="Settings" onClick={handleBackClick}>
        <CloseIcon />
      </NavBar>

      <Container maxWidth="xs">
        <Typography variant="subtitle1" color="textSecondary">
          Profile
        </Typography>

        <Box mt={4} display="flex" alignItems="center">
          <Avatar
            alt="User Name"
            src={filePreview === '' ? userData.avatar : filePreview}
          />

          <label className={classes.addButton} htmlFor="avatar">
            <Button component="span">Add another</Button>
          </label>
        </Box>

        <form onSubmit={handleSubmit}>
          <input
            name="avatar"
            accept="image/png, image/jpeg"
            className={classes.input}
            id="avatar"
            type="file"
            onChange={handleChange}
          />

          <TextField
            fullWidth
            name="name"
            id="name"
            label="Name"
            type="text"
            onChange={handleChange}
            value={userData.name}
          />

          <TextField
            fullWidth
            name="email"
            id="email"
            label="Email"
            type="email"
            onChange={handleChange}
            value={userData.email}
          />

          <Button
            fullWidth
            variant="contained"
            color="primary"
            type="submit"
            disabled={status === 'pending' ? true : false}
            endIcon={
              status === 'pending' && (
                <CircularProgress size={18} color="secondary" />
              )
            }
          >
            {status === 'pending' ? 'Updating…' : 'Save changes'}
          </Button>
        </form>

        {myMuseum && (
          <Box mt={6}>
            <Typography gutterBottom variant="subtitle1" color="textSecondary">
              My Museum
            </Typography>

            <Grid container spacing={3}>
              {denormalizeData(myMuseum).map((museum, index) => (
                <MuseumCard key={index} {...museum} fullWidth />
              ))}
            </Grid>
          </Box>
        )}
      </Container>
    </>
  );
}
