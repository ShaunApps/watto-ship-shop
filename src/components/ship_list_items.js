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
import RaisedButton from 'material-ui/RaisedButton';
import ActionAndroid from 'material-ui/svg-icons/action/code';

const cardMediaStyle = {
  height: 300,
  width: 288,
  flexGrow: 1,
  flexShrink: 1,
  flexBasis: "auto",
  marginLeft: 30,
  marginTop: 30,
  verticalAlign: 'middle',
  alignItems: 'center'

};



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
        <Card key={this.props.id} className="Card-item" expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
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
            <RaisedButton
              label="Details"
              labelPosition="before"
              primary={true}
              icon={<ActionAndroid />}
              containerElement={<Link to={"ship/" + this.props.id} />} />

            </CardActions>
            <CardText expandable={true}>
              Manufacturer: {this.props.manufacturer}
              {this.props.price && <p>Price: {this.props.price}</p>}
            </CardText>
        </Card>
      )
  }
}
