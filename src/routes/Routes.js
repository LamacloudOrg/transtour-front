import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Login from '../components/Login'
import  Travels  from '../pages/TravelPage';
import Home from '../pages/HomePage'
import Voucher from '../pages/VoucherPage'
import TravelFormPage from '../pages/TravelFormPage';

function Routes() {
  return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login}/>
          <Route exact path="/home" component={Home}/>
          <Route exact path="/travels" component={Travels}/>
          <Route exact path="/travel/crear" component={TravelFormPage}/>
          <Route exact path="/vouchers" component={Voucher}/>
        </Switch>
      </BrowserRouter>
  );
}

export default Routes;
