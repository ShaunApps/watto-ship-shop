import React, { Component } from 'react';

import Subheader from 'material-ui/Subheader';
import {List, ListItem} from 'material-ui/List';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';

import {Tabs, Tab} from 'material-ui/Tabs';
import BuildIcon from "material-ui/svg-icons/action/build";
import FlightIcon from "material-ui/svg-icons/action/flight-takeoff";
import ContentSend from 'material-ui/svg-icons/content/send';
import {grey50} from 'material-ui/styles/colors';

const listStyle = {
  width: 'auto',
  height: 'auto',
  marginLeft: 30,
  textAlign: 'right'
};



export default function SpecsShips(props) {
  const specs = props.ship.techspecs;

  return (
   <Paper zDepth={2}>
    <Tabs>
      <Tab label={ <FlightIcon color={grey50} /> } >
        <List style={listStyle} >
          {specs.length && <ListItem leftIcon={<ContentSend />} secondaryText={specs.length} primaryText="Length"/>}
          <Divider />
          {specs.maxaccel && <ListItem leftIcon={<ContentSend />} secondaryText={specs.maxaccel} primaryText="Max Acceleration" />}
          <Divider />
          {specs.MGLT && <ListItem leftIcon={<ContentSend />} secondaryText={specs.MGLT} primaryText="MGLT" />}
          <Divider />
          {specs.maxatmosphericspeed && <ListItem leftIcon={<ContentSend />} secondaryText={specs.maxatmosphericspeed} primaryText="Max Atomospheric Speed" />}
        </List>
      </Tab>
      <Tab label={ <BuildIcon color={grey50}/> }>
        <List style={listStyle} >
          {specs.shielding && <ListItem leftIcon={<ContentSend />} secondaryText={specs.shielding} primaryText="Shielding" /> }
          <Divider />
          {specs.hull && <ListItem leftIcon={<ContentSend />} secondaryText={specs.hull} primaryText="Hull" />}
          <Divider />
          {specs.sensor && <ListItem leftIcon={<ContentSend />} secondaryText={specs.sensor} primaryText="Sensor"/>}
          <Divider />
          {specs.targeting && <ListItem leftIcon={<ContentSend />} secondaryText={specs.targeting} primaryText="Targeting" />}
          <Divider />
          {specs.armament && <ListItem leftIcon={<ContentSend />} secondaryText={specs.armament} primaryText="Armament" />}
          <Divider />
          {specs.communications && <ListItem leftIcon={<ContentSend />} secondaryText={specs.communications} primaryText="Communications" />}
        </List>
      </Tab>
    </Tabs>
  </Paper>
)
}
