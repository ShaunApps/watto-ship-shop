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

import SpecsShips from '.././components/specs-ship';

import image1 from '.././images/tie_fighter.png';
import image2 from '.././images/X-wing.png';
import image3 from '.././images/Y-Wing.png';
import image4 from '.././images/YT-1300_Light_Freighter.png';
import image5 from '.././images/starwing.png';
import image6 from '.././images/Imperial_Shuttle.png';
import image7 from '.././images/A-wing.png';
import image8 from '.././images/B-Wing-icon.png';

const IMAGE_MAP = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8
];


import './styles.css';




const cardStyle = {
  main: {
    margin: 'auto',
    width: 'auto',
    height: 'auto',
    display: 'flex',
    flexDirection: 'column'
  },

  title: {
    flex: 1
  },

  text: {
    flex: 1
  }


};

const cardMediaStyle = {
  height: 300,
  width: 400,
  margin: 'auto',
  flex: 2,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};

const smallCardStyle = {
  flex: 1,
  boxSizing: 'border-box'
}
const purchaseButton = {
  // marginLeft: 1050,
  // marginRight: -15
};


class ShipShow extends Component {
  componentWillMount() {
    this.props.fetchProduct(this.props.params.id);
  }

  render(){
    const { ship } = this.props;
    let image = IMAGE_MAP[this.props.params.id - 1];
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
            <div className="side-bar-container">
            </div>

            <div className="left-side-container">
              <div className="card-style-div">
                <Card style={cardStyle.main}>
                  <CardMedia
                    style={cardMediaStyle}
                     >
                    <img src={image} alt="Ship" />
                  </CardMedia>
                  <CardTitle title={ship.name} style={cardStyle.title} />
                  <CardText style={cardStyle.text}>
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
            </div>

            <div className="right-side-container">
              <div className="list-style-div">
                <SpecsShips ship={ship} />
              </div>

              <div className="info-card-container">
                <Card className="info-card-card">
                  <CardHeader
                    subtitle={ship.price}
                    title="Price"
                    />
                </Card>
                <Card className="info-card-card">
                  <CardHeader
                    subtitle={ship.class}
                    title="Class"
                    />
                </Card>
                <Card className="info-card-card">
                  <CardHeader
                    subtitle={ship.manufacturer}
                    title="Manufacturer"
                    />
                </Card>
              </div>

              <div className="button-style-div">
                <RaisedButton style={purchaseButton} label="Purchase" primary={true}  />
              </div>
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
