import React, { Component } from 'react';
import { Link } from 'react-router';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {GridList, GridTile} from 'material-ui/GridList';
import FlatButton from 'material-ui/FlatButton';
import Subheader from 'material-ui/Subheader';
import './style.css';
import { Grid, Row, Col } from 'react-flexbox-grid';
import image from '.././images/tie_fighter.png';
// import image2 from '.././images/X-wing.png';
import Divider from 'material-ui/Divider';




const cardStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

const cardMediaStyle = {
  height: 300,
  width: 288,
  display: 'flex',
  flexGrow: 1,
  flexShrink: 1,
  flexBasis: "auto",
  // marginLeft: 30,
  // marginTop: 30,
  verticalAlign: 'middle',
  alignItems: 'center'

};

// const cardMediaStyle = {
//   height: 300,
//   width: 400,
//   margin: 'auto',
//   flex: 2,
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center'
// };

export default class ShipCards extends Component {

    constructor(props) {
      super(props);
      this.state = {
        expanded: false
      };
    }

    handleExpandChange = (expanded) => {
      this.setState({expanded: expanded});

    };

    render(){
      return (
        <Card key={this.props.id} style={cardStyle} expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
          <CardMedia
            mediaStyle={cardMediaStyle} >
            <img src={this.props.image} style="ship-image" alt="Ship" />
          </CardMedia>
          <Divider />

            <CardHeader title={this.props.name}
              subtitle={this.props.class}
              actAsExpander={true}
              showExpandableButton={true} />
            <CardActions>
              <FlatButton
                label="More Info"
                containerElement={<Link to={"ship/" + this.props.id} />}
                />
            </CardActions>
            <CardText expandable={true}>
              {this.props.price} <br/>
              {this.props.manufacturer}
            </CardText>
        </Card>
      )
  }
}
