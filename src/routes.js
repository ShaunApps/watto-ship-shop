import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App';
import ShipList from './containers/ship_list';
import ShipShow from './components/ship_show';

// routes for app
// the Route path="ship/:id" redirects to an individual ship
// with the assigned id

export default (
<Route path="/" component={App}>
  <IndexRoute component={ShipList} />
  <Route path="ship/:id" component={ShipShow} />
</Route>
);
