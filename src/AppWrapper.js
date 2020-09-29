import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import FoodWrapper from './Food/FoodWrapper';
import HomeWrapper from './Home/HomeWrapper';
import RestaurantWrapper from './Restaurants/RestaurantWrapper';
import {routes} from './routes';
export default function AppWrapper() {
  return (
    <Router>
        <Switch>
          <Route path={routes.home} exact>
            <HomeWrapper />
          </Route>
          <Route path={routes.restaurant}>
            <RestaurantWrapper />
          </Route>
          <Route path={routes.food}>
            <FoodWrapper />
          </Route>
        </Switch>
    </Router>
  );
}

