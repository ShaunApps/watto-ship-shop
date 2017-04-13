import React, { Component } from 'react';
import { Link } from 'react-router';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {GridList, GridTile} from 'material-ui/GridList';
import FlatButton from 'material-ui/FlatButton';
import Subheader from 'material-ui/Subheader';
import './style.css';
import { Grid, Row, Col } from 'react-flexbox-grid';


export default function ShipCards(props) {
  return (
    <Card key={props.id} className="Card-item">
      <Link to={"ship/" + props.id}>
      <FlatButton label="More Info" primary={true} />
      </Link>

      <CardTitle title={props.name} />
      <CardText>Ship Manufacturer: {props.manufacturer}</CardText>
      {props.price && <CardText>Ship Price: {props.price}</CardText>}
    </Card>
  )
}
