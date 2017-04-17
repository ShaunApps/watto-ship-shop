import React, { Component } from 'react';
import './style.css';
import Paper from 'material-ui/Paper';
import {grey900, grey300} from 'material-ui/styles/colors';
import AppBar from 'material-ui/AppBar';

const footerStyle = {
  bar: {
    display: 'flex',
    backgroundColor: grey900,
    marginTop: 300,
    zIndex: 0,
    height: 150,
    right: 0,
    bottom: 0
  },
  titleBar: {
    textAlign: 'center',
    color: grey300,
    fontSize: 20
  }

}


export default function Footer(){
  return (
    <AppBar
      style={footerStyle.bar}
      title="© 2017 Shaun Appelbaum"
      titleStyle={footerStyle.titleBar} >
    </AppBar>
  )
}
