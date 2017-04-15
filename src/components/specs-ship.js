import React, { Component } from 'react';

import Subheader from 'material-ui/Subheader';
import {List, ListItem} from 'material-ui/List';


const listStyle = {
  width: 'auto',
  height: 'auto',
  // margin: 28,
  marginLeft: 30,
  // padding: 12,
  textAlign: 'right'
};



export default function SpecsShips(props) {
  const specs = props.ship.techspecs;

  return (
  <List style={listStyle} >
    <Subheader>Tech Specs</Subheader>
    <ListItem primaryText={specs.length} />
    <ListItem primaryText={specs.maxaccel} />
    <ListItem primaryText={specs.MGLT} />
    <ListItem primaryText={specs.maxatmosphericspeed} />
    <ListItem primaryText={specs.shielding} />
    <ListItem primaryText={specs.hull} />
    <ListItem primaryText={specs.sensor} />
    <ListItem primaryText={specs.targeting} />
    <ListItem primaryText={specs.armament} />
    <ListItem primaryText={specs.communications} />
  </List>
)
}
