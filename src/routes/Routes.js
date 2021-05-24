import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Login from '../components/Login'
import  Travels  from '../components/Travels';
import Home from '../pages/Home'

function Routes() {
  return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login}/>
          <Route exact path="/home" component={Home}/>
          <Route exact path="/travels" component={Travels}/>
        </Switch>
      </BrowserRouter>
  );
}

export default Routes;
