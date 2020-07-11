import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MuseumGrid from 'components/grids/MuseumGrid';

const Routes = () => (
<Switch>
    <Route exact path="/museums" component={() => <MuseumGrid />} />
</Switch>
);

export default Routes;