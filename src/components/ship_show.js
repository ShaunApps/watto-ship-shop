import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProduct } from '../actions/index';

// view for an individual ship page

class ShipShow extends Component {
  componentWillMount() {
    this.props.fetchProduct(this.props.params.id);
  }

  render(){
    const { ship } = this.props;
    if (!ship) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <h1>{ship.name}</h1>
        <h2>{this.props.params.id}</h2>
        <h2>{ship.manufacturer}</h2>
        <h2>{ship.class}</h2>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { ship: state.products.ship }
}

export default connect(mapStateToProps, { fetchProduct })(ShipShow);
