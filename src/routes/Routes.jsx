// @flow
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import routePaths from './routePaths';
import App from '../view/containers/App';
import UserComponent from '../view/components/UserComponent';

const Routes = () => (
  <>
    <Switch>
      <Route exact path={routePaths.homePage()} component={App} />
      <Route path={routePaths.userComponent()} component={UserComponent} />
    </Switch>
  </>
);

export default Routes;
