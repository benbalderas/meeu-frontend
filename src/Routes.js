import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MuseumGrid from 'components/grids/MuseumGrid';
import MuseumDetails from 'components/details/MuseumDetails';

const Routes = () => (
<Switch>
    <Route exact path="/museums" component={() => <MuseumGrid />} />
    <Route exact path="/museums/:id" component={() => <MuseumDetails />} />
</Switch>
);

export default Routes;