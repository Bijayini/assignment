import React from 'react';
import {Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import Todos from './components/Todos';


const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/todos" component={Todos} />
  </Switch>
);

export default Routes;