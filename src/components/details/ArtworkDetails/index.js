import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { fetchSingleArtwork } from 'redux/ArtworksDuck';
import { splitSentences } from 'helpers/formatters';

import { Container, Box, Typography } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
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
    height: 220,
    overflowX: 'visible',
    overflowY: 'scroll',
    scrollSnapType: 'y mandatory',
    WebkitOverflowScrolling: 'touch',
    '& > *': {
      scrollSnapAlign: 'start',
      scrollSnapStop: 'always',
      marginTop: theme.spacing(2),
    },
    '&::-webkit-scrollbar': {
      display: 'none',
    },
    [theme.breakpoints.down('sm')]: {
      height: 300,
    },
  },
  fade: {
    width: '100%',
    height: 120,
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    pointerEvents: 'none',
  },
  divider: {
    marginBottom: theme.spacing(5),
  },
  bgDark: {
    background:
      'linear-gradient(to top, rgba(18,18,18,0.9) 0%, rgba(18,18,18,0.5) 80%, rgba(18,18,18,0) 100%)',
  },
  bgLight: {
    background:
      'linear-gradient(to top, rgba(250,250,250,0.9) 0%, rgba(250,250,250,0.5) 80%, rgba(250,250,250,0) 100%)',
  }
}));

export default function ArtworkDetails() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { goBack } = useHistory();
  const { id } = useParams();

  const mode = useSelector((state) => state.theme?.mode);
  const artwork = useSelector((state) => state.artworks.items);
  const infoBits = artwork.description
    ? splitSentences(artwork.description)
    : [''];

  useEffect(() => {
    dispatch(fetchSingleArtwork(id));
  }, [dispatch, id]);

  // Handlers
  const handleBackClick = () => {
    goBack();
  };

  return (
    <>
      <NavBar screenTitle="" onClick={handleBackClick}>
        <CloseIcon />
      </NavBar>

      <Container maxWidth="sm">
        <img
          className={classes.image}
          src={artwork.image}
          alt={artwork.title}
        />

        <Box mt={3} mb={3}>
          <Typography variant="body2" color="textSecondary">
            {artwork.year}
          </Typography>

          <Typography gutterBottom variant="h4">
            {artwork.title}
          </Typography>

          <Typography variant="subtitle2" color="primary">
            {artwork.author}
          </Typography>
        </Box>

        <Typography variant="body1" color="textPrimary">
          {infoBits.shift()}
        </Typography>

        {infoBits.length > 1 && (
          <>
            <Box mt={8}>
              <Typography variant="body2" color="textSecondary">
                Shoking Facts
              </Typography>
            </Box>

            <Box className={classes.snapper}>
              {infoBits.map((bit, index) => (
                <InfoBit text={bit} key={index} />
              ))}

              <div className={`${classes.fade} ${mode === 'dark' ? classes.bgDark : classes.bgLight}`} />
            </Box>
          </>
        )}
      </Container>
    </>
  );
}
