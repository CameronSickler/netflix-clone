import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home, Browse, Signin, Signup } from './pages';
import * as ROUTES from './constants/routes';

export default function App() {
  return (

    <Router>
      <div exact path="/browse" >
        <Browse />
      </div>
      <div exact path="/signin" >
        <Signin />
      </div>
      <div exact path="/signup" >
        <Signup />
      </div>
      <div exact path={ROUTES.HOME}>
        <Home />
      </div>
    </Router>

  );
}