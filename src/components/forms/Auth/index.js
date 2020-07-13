import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';

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
} from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';

export default function Auth() {
  const location = useLocation();
  const isLogin = location.pathname.includes('login');

  const [values, setValues] = useState({
    password: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = () => {};

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
          <TextField fullWidth id="email" label="Email" type="email" required />

          <FormControl fullWidth required>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input
              id="password"
              type={values.showPassword ? 'text' : 'password'}
              value={values.password}
              onChange={handleChange('password')}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>

          <Button fullWidth variant="contained" color="primary">
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
