import React, { useEffect, useState, useLayoutEffect } from 'react';
import { makeStyles, fade } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMuseums } from 'redux/MuseumsDuck';
import { denormalizeData } from 'helpers/formatters';

import { Container, Grid, Box, InputBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import MuseumCard from 'components/cards/MuseumCard';

const useStyles = makeStyles((theme) => ({
  search: {
    position: 'absolute',
    top: 12,
    right: 16,
    zIndex: 8000,
    borderRadius: theme.shape.borderRadius,
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.05),
    },
    marginLeft: 0,
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1.5, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '0ch',
    '&:focus': {
      width: '10ch',
    },
    [theme.breakpoints.up('sm')]: {
      width: '0ch',
      '&:focus': {
        width: '12ch',
      },
    },
  },
}));

export default function MuseumGrid() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const museums = useSelector((state) => state.museums.items);

  const [search, setSearch] = useState('');
  const [filteredMuseums, setFilteredMuseums] = useState([]);

  useEffect(() => {
    dispatch(fetchMuseums());
  }, [dispatch]);

  useLayoutEffect(() => {
    setFilteredMuseums(
      denormalizeData(museums).filter((museum) =>
        museum.city?.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, museums]);

  return (
    <>
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>

        <InputBase
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Type a city…"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ 'aria-label': 'search' }}
        />
      </div>

      <Box mt={1} mb={5}>
        <Container>
          <Grid container spacing={3}>
            {filteredMuseums.map((museum, index) => (
              <MuseumCard key={index} {...museum} />
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
}
