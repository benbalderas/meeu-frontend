import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { fetchSingleArtwork } from 'redux/ArtworksDuck';
import { splitSentences } from 'helpers/formatters';

import {
  Container,
  Box,
  Typography,
  Card,
  CardContent,
} from '@material-ui/core';
import KeyboardBackspaceOutlinedIcon from '@material-ui/icons/KeyboardBackspaceOutlined';
import NavBar from 'components/navigation/NavBar';

const useStyles = makeStyles((theme) => ({
  image: {
    borderRadius: theme.shape.borderRadius - 2,
    width: '100%',
    objectFit: 'cover',
  },
  infoBit: {
    background: '#1e1e1e !important',
    maxWidth: 375,
    paddingBottom: 8,
  },
}));

export default function ArtworkDetails() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();
  const artwork = useSelector((state) => state.artworks.items);
  const infoBits = artwork.description
    ? splitSentences(artwork.description)
    : [''];

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
          {infoBits.shift()}
        </Typography>

        <Typography variant="body1" color="textSecondary">
          <Box>
            {infoBits.map((bit) => (
              <Card className={classes.infoBit} elevation={0}>
                <CardContent>
                  <Typography variant="body2">{bit}</Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Typography>
      </Container>
    </>
  );
}
