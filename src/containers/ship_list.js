import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchProducts } from '../actions/index';
import { Link } from 'react-router';

// main component for homepage of ships
class ShipList extends Component {
  componentWillMount() {
    this.props.fetchProducts();
  }

  renderProducts() {
    return this.props.products.map((product) => {
      return (
        <div>
          <li key={product.id}>
            <Link to={"ship/" + product.id}>
              <ul>{product.name}</ul>
              <ul>{product.manufacturer}</ul>
              <ul>{product.price}</ul>
              <ul>{product.class}</ul>
              <ul>{product.id}</ul>
            </Link>
          </li>
          <br/>
          <br/>
        </div>
      )
    })
  }

  render() {
    return (
      <div>
        <h1>Product List</h1>
        <ul>
          {this.renderProducts()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { products: state.products.all };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchProducts }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ShipList);
