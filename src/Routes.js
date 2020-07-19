import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from 'components/wrappers/PrivateRoute';

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

    <PrivateRoute exact path="/museums" component={() => <MuseumGrid />} />
    <PrivateRoute exact path="/exhibits" component={() => <ExhibitsGrid />} />
    <PrivateRoute exact path="/artworks" component={() => <ArtworksGrid />} />

    <Route exact path="/exhibits/create" component={() => <CreateExhibit />} />
    <Route exact path="/artworks/create" component={() => <CreateArtwork />} />

    <PrivateRoute
      exact
      path="/museums/:id"
      component={() => <MuseumDetails />}
    />
    <PrivateRoute
      exact
      path="/exhibits/:id"
      component={() => <ExhibitDetails />}
    />
    <PrivateRoute
      exact
      path="/artworks/:id"
      component={() => <ArtworkDetails />}
    />
  </Switch>
);

export default Routes;
