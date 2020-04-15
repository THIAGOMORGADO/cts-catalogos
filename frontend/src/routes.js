import React from 'react'
import { Router, Switch, Route } from 'react-router';

import login from './pages/login/login';
import registre from './pages/registre/registre';
import Home from './pages/Home/Home'

import PriveteRoute from './components/PriveteRoute';
import NotFound from '../src/components/NotFound'

import {history} from './history'

const Routes = () => (
  <Router history={history}>
      <Switch>
         <Route  component={login} exact path="/login"/>
         <Route  component={registre} exact path="/registre"/>
         <PriveteRoute  component={Home} exact path="/"/>
         <PriveteRoute  component={NotFound} />
      </Switch>
  </Router>
)

export default Routes;
