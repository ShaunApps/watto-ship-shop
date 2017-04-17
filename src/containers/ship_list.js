import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchProducts } from '../actions/index';
import { Link } from 'react-router';
import './styles.css';
import ShipCards from '../components/ship_list_items';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Subheader from 'material-ui/Subheader';

import { Grid, Row, Col } from 'react-flexbox-grid';

import {IMAGE_MAP} from '.././utils/image_helper';
const IMAGES = IMAGE_MAP.images;


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
      let image = IMAGES[product.id - 1];
      return (
        <Col md={6} xs={12} sm={6} lg={4}>
           <ShipCards id={product.id} name={product.name} manufacturer={product.manufacturer} price={product.price} image={image} />
        </Col>
      )
    })
  }

  render() {
    return (
      <div className="home-page-container-div">
        <Row>
          <Col xs={12} sm={12} md={2} lg={2}>
          </Col>
          <Col xs={12} sm={12} md={10} lg={10}>
            <Row center="xs" >
              <h2 classname="home-page-header">Ships for Sale</h2>
            </Row>
            <Grid className="Grid-thing" fluid={true}>
              <Row className="parent">
                {this.renderProducts()}
              </Row>
            </Grid>
          </Col>
        </Row>
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
