import React from 'react';
import {BrowserRouterm, Switch, Route, BrowserRouter } from 'react-router-dom';
import Login from '../components/Login'
import Home from '../pages/Home'

function Routes() {
  return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login}/>
          <Route exact path="/home" component={Home}/>
        </Switch>
      </BrowserRouter>
  );
}

export default Routes;
