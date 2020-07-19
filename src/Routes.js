import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Landing
import Login from 'components/forms/Login';
import Signup from 'components/forms/Signup';

// Grids
import MuseumGrid from 'components/grids/MuseumGrid';
import ExhibitsGrid from 'components/grids/ExhibitsGrid';
import ArtworksGrid from 'components/grids/ArtworksGrid';

// Create
import CreateExhibit from 'components/forms/CreateExhibit';
import CreateArtwork from 'components/forms/CreateArtwork';

// Details
import MuseumDetails from 'components/details/MuseumDetails';
import ExhibitDetails from 'components/details/ExhibitDetails';
import ArtworkDetails from 'components/details/ArtworkDetails';

const Routes = () => (
  <Switch>
    <Route exact path="/login" component={() => <Login />} />
    <Route exact path="/signup" component={() => <Signup />} />

    <Route exact path="/museums" component={() => <MuseumGrid />} />
    <Route exact path="/exhibits" component={() => <ExhibitsGrid />} />
    <Route exact path="/artworks" component={() => <ArtworksGrid />} />

    <Route exact path="/exhibits/create" component={() => <CreateExhibit />} />
    <Route exact path="/artworks/create" component={() => <CreateArtwork />} />

    <Route exact path="/museums/:id" component={() => <MuseumDetails />} />
    <Route exact path="/exhibits/:id" component={() => <ExhibitDetails />} />
    <Route exact path="/artworks/:id" component={() => <ArtworkDetails />} />
  </Switch>
);

export default Routes;
