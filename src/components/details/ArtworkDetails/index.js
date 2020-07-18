import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { fetchSingleArtwork } from 'redux/ArtworksDuck';
import { splitSentences } from 'helpers/formatters';

import { Container, Box, Typography } from '@material-ui/core';
import SwipeableViews from 'react-swipeable-views';
import KeyboardBackspaceOutlinedIcon from '@material-ui/icons/KeyboardBackspaceOutlined';
import NavBar from 'components/navigation/NavBar';
import InfoBit from 'components/cards/InfoBit';

const useStyles = makeStyles((theme) => ({
  main: {
    overflowX: 'hidden',
  },
  image: {
    borderRadius: theme.shape.borderRadius - 2,
    width: '100%',
    objectFit: 'cover',
  },
  container: {
    marginLeft: -16,
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
    <div className={classes.main}>
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

        <Container className={classes.container} maxWidth="sm">
          <Box mt={4}>
            <SwipeableViews
              enableMouseEvents
              style={{ overflow: 'visible' }}
              slideStyle={{ marginRight: 24 }}
            >
              {/* <InfoBit text={infoBits[0]} />
              <InfoBit text={infoBits[1]} />
              <InfoBit text={infoBits[2]} />
              <InfoBit text={infoBits[3]} /> */}
              {infoBits.map((bit, index) => (
                <InfoBit text={bit} index={index} />
              ))}
            </SwipeableViews>
          </Box>
        </Container>
      </Container>
    </div>
  );
}
