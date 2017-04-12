import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App';
import ShipList from './containers/ship_list';




export default (
<Route path="/" component={App}>
  <IndexRoute component={ShipList} />
</Route>
);
