import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './components/App';

const Routes = () => (
  <BrowserRouter>
    <Route exact path="/" component={App} />
  </BrowserRouter>
);

export default Routes;
