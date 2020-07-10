import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';

const Routes = () => (
<Switch>
    <Route exact path="/museums" component={() => <Typography variant="h2">Test</Typography>} />
</Switch>
);

export default Routes;