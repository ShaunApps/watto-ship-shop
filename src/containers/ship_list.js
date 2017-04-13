import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchProducts } from '../actions/index';
import { Link } from 'react-router';
import './styles.css';
import ShipCards from '../components/ship_list_items';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {GridList, GridTile} from 'material-ui/GridList';
import FlatButton from 'material-ui/FlatButton';
import Subheader from 'material-ui/Subheader';

import { Grid, Row, Col } from 'react-flexbox-grid';


const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 450,
    overflowY: 'auto',
  },
};

// main component for homepage of ships
class ShipList extends Component {
  componentWillMount() {
    this.props.fetchProducts();
  }

  renderProducts() {
    return this.props.products.map((product) => {
      return (
        <Col md={4} xs={12} sm={6}>
           <ShipCards id={product.id} name={product.name} manufacturer={product.manufacturer} price={product.price} />
        </Col>
      )
    })
  }

  render() {
    return (
      <div>
        <Grid className="Grid-thing" fluid={true}>
          <Row className="parent">
            {this.renderProducts()}
          </Row>
        </Grid>
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
