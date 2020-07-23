import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { signup } from 'redux/UserDuck';

import {
  Container,
  Box,
  Typography,
  TextField,
  FormControl,
  Input,
  InputLabel,
  InputAdornment,
  IconButton,
  Grid,
  Button,
  CircularProgress,
} from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';

export default function Signup() {
  const { push } = useHistory();
  const dispatch = useDispatch();
  const status = useSelector((state) => state.user.status);

  // States
  const [passShow, setPassShow] = useState(false);
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    // role: 'Visitor',
    // museum: '',
  });

  const handleClickShowPassword = () => {
    setPassShow(!passShow);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
    const key = event.target.name;
    const value = event.target.value;

    setUser((prevState) => ({ ...prevState, [key]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(signup(user, push));
  };

  return (
    <Container maxWidth="md">
      <Grid container spacing={0}>
        <Grid item xs={12} sm={5} md={5}>
          <Typography gutterBottom align="center" variant="h2">
            Visitor account
          </Typography>

          <Typography align="center" variant="body1" color="textSecondary">
            Experience top museums in the world. Know all about your favorite
            art pieces.
          </Typography>

          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              name="name"
              id="name"
              label="Full Name"
              type="text"
              required
              onChange={handleChange}
            />

            <TextField
              fullWidth
              name="email"
              id="email"
              label="Email"
              type="email"
              required
              onChange={handleChange}
            />

            <FormControl fullWidth required>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input
                name="password"
                id="password"
                type={passShow ? 'text' : 'password'}
                onChange={handleChange}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {passShow ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>

            <Button
              disableElevation
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
              Create account
            </Button>
          </form>

          <Box mt={4} display="flex" flexDirection="column" alignItems="center">
            <Typography
              variant="body2"
              color="textSecondary"
              align="center"
              display="block"
            >
              Already a member?
            </Typography>

            <Button disableElevation size="small" component={Link} to="/login">
              Log in here
            </Button>
          </Box>
        </Grid>

        <Grid item xs={12} sm={2} md={2} style={{ height: 80 }} />

        <Grid item xs={12} sm={5} md={5}>
          <Box>
            <Typography
              gutterBottom
              variant="h2"
              align="center"
              display="block"
            >
              Admin account
            </Typography>

            <Typography
              gutterBottom
              display="block"
              variant="body2"
              align="center"
              color="textSecondary"
            >
              Get in touch with us, we'd love to get your museum in Meeu and
              hook you up with an administrator account.
            </Typography>

            <Box
              mt={4}
              display="flex"
              alignItems="center"
              flexDirection="column"
            >
              <Typography display="block" variant="body1" align="center">
                email: humans@meeu.app
              </Typography>

              <Button
                variant="outlined"
                size="small"
                onClick={() => navigator.clipboard.writeText('humans@meeu.app')}
              >
                Copy address
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
