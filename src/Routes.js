import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MuseumGrid from 'components/grids/MuseumGrid';
import ExhibitsGrid from 'components/grids/ExhibitsGrid';
import ArtworksGrid from 'components/grids/ArtworksGrid';
import MuseumDetails from 'components/details/MuseumDetails';
import Auth from 'components/forms/Login';
import CreateExhibit from 'components/forms/CreateExhibit';
import CreateArtwork from 'components/forms/CreateArtwork';

const Routes = () => (
  <Switch>
    <Route exact path="/login" component={() => <Auth />} />
    <Route exact path="/signup" component={() => <Auth />} />
    <Route exact path="/museums" component={() => <MuseumGrid />} />
    <Route exact path="/exhibits" component={() => <ExhibitsGrid />} />
    <Route exact path="/artworks" component={() => <ArtworksGrid />} />
    <Route exact path="/museums/:id" component={() => <MuseumDetails />} />
    <Route exact path="/exhibits/create" component={() => <CreateExhibit />} />
    <Route exact path="/artworks/create" component={() => <CreateArtwork />} />
  </Switch>
);

export default Routes;
