import React from 'react';
import { Router,browserHistory,Route,IndexRoute } from 'react-router';
import Main from '../components/Main';
import Login from '../components/Login';
import Home from '../components/Home';
import Register from '../components/Register';
import CreateAccount from '../components/container/CreateAccount';

export default (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <Route path="home/:username" component={Home}></Route>
      <Route path="newacc" component={CreateAccount}></Route>
      <IndexRoute component={Login}/>
    </Route>
  </Router>
);
