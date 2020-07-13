import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MuseumGrid from 'components/grids/MuseumGrid';
import MuseumDetails from 'components/details/MuseumDetails';
import Auth from 'components/forms/Auth';

const Routes = () => (
  <Switch>
    <Route exact path="/login" component={() => <Auth />} />
    <Route exact path="/signup" component={() => <Auth />} />
    <Route exact path="/museums" component={() => <MuseumGrid />} />
    <Route exact path="/museums/:id" component={() => <MuseumDetails />} />
  </Switch>
);

export default Routes;
