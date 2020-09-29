import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import {routes} from './routes';
import AppWrapper from './AppWrapper';
export default function App() {
  return (
    <Router>
        <Switch>
          <Route path={routes.home} component={AppWrapper} />
          <Redirect to={routes.home} />
        </Switch>
    </Router>
  );
}

