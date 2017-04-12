import { FETCH_PRODUCTS, FETCH_PRODUCT } from '../actions/index';

const INITIAL_STATE = { all: [], ship: null };

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
  // get all ships from JSON data
  // this is manually assinging an id # to each ship
  case FETCH_PRODUCTS:
    let id = 1;
    action.payload.data.products.map(function(item) {
      item.id = id;
      id++
    })
    return { ...state, all: action.payload.data.products };
  // get a single ship (product) that matches the id of the react-router
  // re-mapping id's isn't ideal, but works with static JSON data
  case FETCH_PRODUCT:
    var id = 1;
    var ship;
    action.payload.data.products.map(function(item) {
      item.id = id;
      id++;
      if (item.id == action.meta) {
        ship = item;
      }
    })
    return { ...state, ship: ship };
  default:
    return state;
  }
}
