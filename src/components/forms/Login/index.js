import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, Link, useHistory } from 'react-router-dom';
import { login } from 'redux/UserDuck';

import {
  Container,
  Box,
  TextField,
  FormControl,
  Input,
  InputLabel,
  InputAdornment,
  IconButton,
  Typography,
  Button,
  CircularProgress,
} from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';

export default function Auth() {
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();
  const status = useSelector((state) => state.user.status);
  const isLogin = location.pathname.includes('login');

  // States
  const [credentials, setCredentials] = useState({});
  const [passShow, setPassShow] = useState(false);

  // Handlers
  const handleClickShowPassword = () => {
    setPassShow(!passShow);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
    const key = event.target.name;
    const value = event.target.value;

    setCredentials((prevState) => ({ ...prevState, [key]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(login(credentials)).then(() => {
      history.push('/museums');
    });
  };

  return (
    <Box mt={3} mb={5}>
      <Container maxWidth="xs">
        {isLogin ? (
          <Typography gutterBottom align="center" variant="h2">
            Login
          </Typography>
        ) : (
          <Box>
            <Typography gutterBottom align="center" variant="h2">
              Create an account
            </Typography>

            <Typography align="center" variant="body1">
              Experience top museums in the world. Know all about your favorite
              art pieces.
            </Typography>
          </Box>
        )}

        <form onSubmit={handleSubmit}>
          {isLogin && status === 'error' && (
            <Typography
              variant="body2"
              color="primary"
              display="block"
              align="center"
            >
              Incorrect credentials
            </Typography>
          )}

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
            {isLogin ? 'Login' : 'Create Account'}
          </Button>
        </form>

        <Box mt={6} display="flex" flexDirection="column" alignItems="center">
          <Typography
            variant="body2"
            color="textSecondary"
            align="center"
            display="block"
          >
            {isLogin ? 'No account yet?' : 'Already have an account?'}
          </Typography>

          {isLogin ? (
            <Button size="small" component={Link} to="/signup">
              Create an account
            </Button>
          ) : (
            <Button size="small" component={Link} to="/login">
              Log in instead
            </Button>
          )}
        </Box>
      </Container>
    </Box>
  );
}
