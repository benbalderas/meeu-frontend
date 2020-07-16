import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { fetchSingleArtwork } from 'redux/ArtworksDuck';

import { Container, Box, Typography } from '@material-ui/core';
import KeyboardBackspaceOutlinedIcon from '@material-ui/icons/KeyboardBackspaceOutlined';
import NavBar from 'components/navigation/NavBar';

const useStyles = makeStyles((theme) => ({
  image: {
    borderRadius: theme.shape.borderRadius - 2,
    width: '100%',
    objectFit: 'cover',
  },
}));

export default function ArtworkDetails() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();
  const artwork = useSelector((state) => state.artworks.items);

  useEffect(() => {
    dispatch(fetchSingleArtwork(id));
  }, [dispatch, id]);

  // Handlers
  const handleBackClick = () => {
    history.goBack();
  };

  return (
    <>
      <NavBar screenTitle="" onClick={handleBackClick}>
        <KeyboardBackspaceOutlinedIcon />
      </NavBar>

      <Container maxWidth="md">
        <img
          className={classes.image}
          src={artwork.image}
          alt={artwork.title}
        />

        <Box mt={3} mb={3}>
          <Typography gutterBottom variant="h5">
            {artwork.title}
          </Typography>
          <Typography variant="subtitle2" color="primary">
            {artwork.author}
          </Typography>
        </Box>

        <Typography variant="body1" color="textSecondary">
          {artwork.description}
        </Typography>
      </Container>
    </>
  );
}
