import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from 'components/wrappers/PrivateRoute';
import AdminRoute from 'components/wrappers/AdminRoute';

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
import UserDetails from 'components/details/UserDetails';

const Routes = () => (
  <Switch>
    <Route exact path="/login" component={() => <Login />} />
    <Route exact path="/signup" component={() => <Signup />} />

    <PrivateRoute exact path="/museums" component={() => <MuseumGrid />} />
    <PrivateRoute exact path="/exhibits" component={() => <ExhibitsGrid />} />
    <PrivateRoute exact path="/artworks" component={() => <ArtworksGrid />} />

    <AdminRoute
      exact
      path="/exhibits/create"
      component={() => <CreateExhibit />}
    />
    <AdminRoute
      exact
      path="/artworks/create"
      component={() => <CreateArtwork />}
    />

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
    <PrivateRoute exact path="/settings" component={() => <UserDetails />} />
  </Switch>
);

export default Routes;
