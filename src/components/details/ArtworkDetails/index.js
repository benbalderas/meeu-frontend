import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { fetchSingleArtwork } from 'redux/ArtworksDuck';
import { splitSentences } from 'helpers/formatters';

import { Container, Box, Typography } from '@material-ui/core';
import KeyboardBackspaceOutlinedIcon from '@material-ui/icons/KeyboardBackspaceOutlined';
import NavBar from 'components/navigation/NavBar';
import InfoBit from 'components/cards/InfoBit';

const useStyles = makeStyles((theme) => ({
  image: {
    borderRadius: theme.shape.borderRadius - 2,
    width: '100%',
    objectFit: 'cover',
  },
  snapper: {
    position: 'relative',
    height: 200,
    overflowY: 'scroll',
    scrollSnapType: 'y mandatory',
    WebkitOverflowScrolling: 'touch',
    '& > *': {
      scrollSnapAlign: 'start',
      scrollSnapStop: 'always',
      marginTop: theme.spacing(2),
    },
  },
  fade: {
    width: '100%',
    height: 150,
    background:
      'linear-gradient(to top, rgba(18,18,18,0.7) 0%, rgba(18,18,18,0.3) 80%, rgba(18,18,18,0) 100%)',
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    pointerEvents: 'none',
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

      <Container maxWidth="sm">
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

          <Typography gutterBottom variant="overline">
            {artwork.year}
          </Typography>
        </Box>

        <Typography variant="body1" color="textSecondary">
          {infoBits.shift()}
        </Typography>

        <Box mt={8}>
          <Typography variant="subtitle1" color="textSecondary">
            Shoking facts
          </Typography>
        </Box>

        <Box className={classes.snapper} mt={2} maxWidth={600}>
          {infoBits.map((bit, index) => (
            <InfoBit text={bit} key={index} />
          ))}

          <div className={classes.fade} />
        </Box>
      </Container>
    </>
  );
}
