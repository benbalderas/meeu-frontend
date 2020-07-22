import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { fetchSingleExhibit } from 'redux/ExhibitsDuck';
import { fetchArtworks } from 'redux/ArtworksDuck';
import { fetchMuseums } from 'redux/MuseumsDuck';
import { denormalizeData } from 'helpers/formatters';
import { deleteExhibit } from 'redux/ExhibitsDuck';

import {
  Container,
  Grid,
  Typography,
  Box,
  Chip,
  Divider,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core';
import KeyboardBackspaceOutlinedIcon from '@material-ui/icons/KeyboardBackspaceOutlined';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import NavBar from 'components/navigation/NavBar';
import ArtworkCard from 'components/cards/ArtworkCard';

const useStyles = makeStyles((theme) => ({
  metadata: {
    '& > *:not(:first-child)': {
      marginLeft: theme.spacing(1),
    },
  },
  divider: {
    marginBottom: theme.spacing(5),
  },
  dangerZone: {
    marginRight: 0,
  },
}));

export default function ExhibitDetails() {
  const dispatch = useDispatch();
  const { push } = useHistory();
  const history = useHistory();
  const classes = useStyles();
  const { id } = useParams();

  // States
  const [dialog, setDialog] = useState(false);

  // State selectors
  const userId = useSelector((state) => state.user.data._id);
  const exhibit = useSelector((state) => state.exhibits.items);
  const artworks = useSelector((state) =>
    denormalizeData(state.artworks.items)
  );
  const adminMuseum = useSelector(
    (state) => denormalizeData(state.museums.items)[0]
  );

  useEffect(() => {
    dispatch(fetchSingleExhibit(id));
    dispatch(fetchArtworks(id));
    dispatch(fetchMuseums(userId));
  }, [dispatch, id, userId]);

  // Handlers
  const handleBackClick = () => {
    history.goBack();
  };

  const handleDeleteClick = () => {
    dispatch(deleteExhibit(id, push));
  };

  const handleOpen = () => {
    setDialog(true);
  };

  const handleClose = () => {
    setDialog(false);
  };

  return (
    <>
      <NavBar screenTitle="" onClick={handleBackClick}>
        <KeyboardBackspaceOutlinedIcon />
      </NavBar>

      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Grid item md={6} lg={6} sm={12}>
            <Typography variant="h3">{exhibit.title}</Typography>

            <Box
              className={classes.metadata}
              mt={4}
              mb={3}
              display="flex"
              alignItems="center"
            >
              <Chip
                variant="outlined"
                size="small"
                label={exhibit.type}
                color={exhibit.type === 'Temporary' ? 'primary' : 'default'}
              />

              {exhibit.endDate && (
                <Chip
                  variant="outlined"
                  size="small"
                  label={format(
                    new Date(exhibit.endDate.toString()),
                    'MM/dd/yyy'
                  )}
                />
              )}
            </Box>
          </Grid>

          <Grid item md={6} lg={6} sm={12}>
            <Typography variant="body2">{exhibit.description}</Typography>
          </Grid>
        </Grid>
      </Container>

      <Divider className={classes.divider} />

      <Container>
        <Box mt={5}>
          <Grid container spacing={3}>
            {artworks.map((artwork, index) => (
              <ArtworkCard key={index} {...artwork} />
            ))}
          </Grid>
        </Box>
      </Container>

      {exhibit?.museum === adminMuseum?._id && (
        <>
          <Divider className={classes.divider} />

          <Container className={classes.dangerZone} maxWidth="xs">
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography variant="body2" align="right" color="textSecondary">
                Need to delete this exhibition?
              </Typography>

              <Button
                variant="outlined"
                endIcon={<DeleteForeverIcon />}
                onClick={handleOpen}
              >
                Delete
              </Button>
            </Box>
          </Container>

          <Dialog
            open={dialog}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">Danger!</DialogTitle>

            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                You are about to delete this exhibit and all the artworks in it.
                This action cannot be undone, do you want to proceed?
              </DialogContentText>
            </DialogContent>

            <DialogActions>
              <Button onClick={handleClose} color="secondary">
                Do not delete
              </Button>
              <Button onClick={handleDeleteClick} color="primary" autoFocus>
                Yes, delete
              </Button>
            </DialogActions>
          </Dialog>
        </>
      )}
    </>
  );
}
