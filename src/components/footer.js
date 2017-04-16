import React, { Component } from 'react';
import './style.css';
import Paper from 'material-ui/Paper';

const footerStyle = {
  display: 'flex',
  Color: 'FFF9C4',
  marginTop: 300,
  zIndex: 0,
  height: 100
}

export default function Footer(){
  return (
    <Paper style={footerStyle} zDepth={1} >
        <div className="footer-paper-div" >
          © 2017 Shaun Appelbaum
        </div>
    </Paper>
  )
}
