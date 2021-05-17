import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import Form from './components/Form';
import MapPage from './components/MapPage';

import history from './history';

export default (props) => (
    <Router history={history}>
        <Switch>
            <Route exact path='/'>
                <Form />
            </Route>
            <Route path='/pais'>
                <MapPage />
            </Route>
        </Switch>
    </Router>
);