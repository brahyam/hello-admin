import React from 'react';
import { Route } from 'react-router-dom';
import Registration from './Registration';

export default [
  <Route exact path="/registration" component={Registration} noLayout />,
];
