import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

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
  Radio,
  RadioGroup,
  FormLabel,
  FormControlLabel,
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
    role: 'Visitor',
    museum: '',
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

  return (
    <Box mt={3} mb={5}>
      <Container maxWidth="xs">
        <Typography gutterBottom align="center" variant="h2">
          Create an account
        </Typography>

        <Typography align="center" variant="body1">
          Experience top museums in the world. Know all about your favorite art
          pieces.
        </Typography>

        <form>
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

          <Box mt={3}>
            <FormControl component="fieldset">
              <FormLabel component="legend">What do you want to do?</FormLabel>

              <RadioGroup name="role" onChange={handleChange} value={user.role}>
                <FormControlLabel
                  value="Visitor"
                  control={<Radio />}
                  label="I want to experience museums"
                />
                <FormControlLabel
                  value="Admin"
                  control={<Radio />}
                  label="I'm a museum admin"
                />
              </RadioGroup>
            </FormControl>
          </Box>

          {user.role === 'Admin' && (
            <TextField
              fullWidth
              name="museum"
              id="museum"
              label="Museum where you work"
              type="text"
              onChange={handleChange}
              helperText="We will get in touch to verify this"
            />
          )}

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
            Create account
          </Button>
        </form>

        <Box mt={6} display="flex" flexDirection="column" alignItems="center">
          <Typography
            variant="body2"
            color="textSecondary"
            align="center"
            display="block"
          >
            Already a member?
          </Typography>

          <Button size="small" component={Link} to="/login">
            Log in here
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
