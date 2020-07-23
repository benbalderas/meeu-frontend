import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

import { fetchMuseums } from 'redux/MuseumsDuck';
import { userUpdate } from 'redux/UserDuck';
import { switchTheme } from 'redux/ThemeDuck';
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
  Snackbar,
  Switch,
  FormControlLabel,
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
  const mode = useSelector((state) => state.theme.mode);

  // State
  const [checked, setChecked] = useState(mode === 'dark' ? false : true);
  const [filePreview, setFilePreview] = useState('');
  const [notif, setNotif] = useState(false);
  const [avatar, setAvatar] = useState({});
  const [userData, setUserData] = useState({
    email: user.email,
    name: user.name,
  });

  useEffect(() => {
    dispatch(fetchMuseums(user._id));
  }, [dispatch, user._id]);

  // Handlers
  const handleChange = (event) => {
    const key = event.target.name;
    const value = event.target.value;

    setUserData((prevState) => ({ ...prevState, [key]: value }));
  };

  const handleAvatarChange = (event) => {
    setAvatar(event.target.files);
    setFilePreview(URL.createObjectURL(event.target.files[0]));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();

    for (let key in userData) {
      formData.append(key, userData[key]);
    }

    if (avatar[0]) {
      formData.append('avatar', avatar[0]);
    }

    dispatch(userUpdate(formData, user._id, setNotif));
  };

  const handleBackClick = () => {
    history.goBack();
  };

  const handleClose = (event) => {
    setNotif(false);
  };

  const handleSwitchChange = (event) => {
    setChecked(!checked);
    dispatch(switchTheme());
  };

  return (
    <>
      <NavBar screenTitle="Settings" onClick={handleBackClick}>
        <CloseIcon />
      </NavBar>

      <Container maxWidth="xs">
        <Box mb={6}>
          <Typography variant="subtitle1" color="textSecondary">
            App Settings
          </Typography>

          <FormControlLabel
            control={
              <Switch
                checked={checked}
                onChange={handleSwitchChange}
                name="switchTheme"
                color="primary"
              />
            }
            label="Light mode"
          />
        </Box>

        <Typography variant="subtitle1" color="textSecondary">
          Profile
        </Typography>

        <Box mt={4} display="flex" alignItems="center">
          <Avatar
            alt="User Name"
            src={filePreview === '' ? user.avatar : filePreview}
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
            onChange={handleAvatarChange}
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

        {Object.keys(myMuseum).length !== 0 && (
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

      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={notif}
        onClose={handleClose}
        autoHideDuration={4000}
        message="Cool, profile updated."
      />
    </>
  );
}
