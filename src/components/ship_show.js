import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProduct } from '../actions/index';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {GridList, GridTile} from 'material-ui/GridList';
import FlatButton from 'material-ui/FlatButton';
import Subheader from 'material-ui/Subheader';
import Paper from 'material-ui/Paper';

import { Grid, Row, Col } from 'react-flexbox-grid';

import image from '.././tie_fighter.png';


const style = {
  height: 525,
  width: 525,
  margin: 25,
  marginLeft: 30,
  padding: 12,
  textAlign: 'right',
  display: 'inline-block',
};

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
        <Grid fluid={true}>
        <Row>
          <Col xs={12} sm={12} md={6} lg={6}>
            <Card className="Card-show">
              <CardMedia
                overlay={<CardTitle title={ship.name} />}
                className="ship-image" >
                <img src={image} alt="Ship" />
              </CardMedia>
              <CardText>
                This {ship.name} was manufactured by {ship.manufacturer},
                so you know you can't go wrong when it comes to piloting a {ship.class}.
              </CardText>
            </Card>
          </Col>

          <Col xs={12} sm={12} md={4} lg={4}>
            <Paper style={style} zDepth={3}>
              <h3>Tech Specs</h3>
              <p>{ship.techspecs.length}</p>
              <p>{ship.techspecs.maxaccel}</p>
              <p>{ship.techspecs.MGLT}</p>
              <p>{ship.techspecs.maxatmosphericspeed}</p>
              <p>{ship.techspecs.shielding}</p>
              <p>{ship.techspecs.hull}</p>
              <p>{ship.techspecs.sensor}</p>
              <p>{ship.techspecs.targeting}</p>
              <p>{ship.techspecs.armament}</p>
              <p>{ship.techspecs.communications}</p>
            </Paper>
          </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { ship: state.products.ship }
}

export default connect(mapStateToProps, { fetchProduct })(ShipShow);
