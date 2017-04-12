import axios from 'axios';

export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const FETCH_PRODUCT = 'FETCH_PRODUCT';

// url for JSON data
const PRODUCT_URL = 'http://demo7475333.mockable.io/spaceships';

// get all the ships from the url
export function fetchProducts() {
  const request = axios.get(`${PRODUCT_URL}`);
  return {
    type: FETCH_PRODUCTS,
    payload: request
  };
}

// get all the data but pass in the ship id to the 'meta' field
export function fetchProduct(id) {
  const request = axios.get(`${PRODUCT_URL}`);

  return {
    type: FETCH_PRODUCT,
    payload: request,
    meta: id
  };
}
