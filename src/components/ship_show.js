import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProduct } from '../actions/index';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {GridList, GridTile} from 'material-ui/GridList';
import FlatButton from 'material-ui/FlatButton';
import Subheader from 'material-ui/Subheader';
import Paper from 'material-ui/Paper';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

import { Grid, Row, Col } from 'react-flexbox-grid';
import CircularProgress from 'material-ui/CircularProgress';
import image from '.././images/tie_fighter.png';

import './style.css';


import SpecsShips from './specs-ship';

const cardStyle = {
  margin: 'auto'
};

const cardMediaStyle = {
  height: 'auto',
  width: 'auto'
};

const listStyle = {
  width: 'auto',
  height: 'auto',
  // margin: 28,
  marginLeft: 30,
  // padding: 12,
  textAlign: 'right'
};

const purchaseButton = {
  marginLeft: 1050,
  marginRight: -15
};


class ShipShow extends Component {
  componentWillMount() {
    this.props.fetchProduct(this.props.params.id);
  }

  render(){
    const { ship } = this.props;
    if (!ship) {
      return (
          <div>
            <div className="waiting-div">
              <CircularProgress className="waiting-circle" size={100} thickness={5} />
            </div>
          </div>
          )
     }
    return (
      <div>
          <div className="flex-container-thing">
            <div className="left-side-item">
              Sidenav
            </div>
            <div className="card-style-div">
              <Card style={cardStyle}>
                <CardMedia
                  style={cardMediaStyle}
                  overlay={<CardTitle title={ship.name} />}
                   >
                  <img src={image} alt="Ship" />
                </CardMedia>
                <CardText>
                  <p>The {ship.name} was built by {ship.manufacturer}, a top manufacturer of {ship.class}
                   -class ships.
                   </p>
                  {ship.class == "Starfighter" && // only render speed info if ship is a starfigher 
                  <p>
                   It has top speeds of {ship.techspecs.MGLT} per hour (space) and {ship.techspecs.maxatmosphericspeed} (atomosphere),
                   with a max acceleration of {ship.techspecs.maxaccel}'s.
                  </p> }
                </CardText>
              </Card>
            </div>
              <div className="list-style-div">
                <SpecsShips ship={ship} />
              </div>
          </div>
          <div className="flex-container-bottom">
            <div className="flex-button-div">
              <RaisedButton style={purchaseButton} label="Purchase" primary={true}  />
            </div>
          </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { ship: state.products.ship }
}

export default connect(mapStateToProps, { fetchProduct })(ShipShow);
