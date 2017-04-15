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
          className="ship-image" >
          <img src={this.props.image} alt="Ship" />
        </CardMedia>
            <CardActions>
              <FlatButton
                label="More Info"
                containerElement={<Link to={"ship/" + this.props.id} />}
                />
            </CardActions>
            <CardTitle title={this.props.name}
              subtitle={this.props.class}
              actAsExpander={true}
              showExpandableButton={true} />
            <CardText expandable={true}>
              {this.props.price} <br/>
              {this.props.manufacturer}
            </CardText>
        </Card>
      )
  }
}
