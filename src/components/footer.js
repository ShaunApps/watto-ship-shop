import React, { Component } from 'react';
import './style.css';
import Paper from 'material-ui/Paper';
import {yellow100} from 'material-ui/styles/colors';
import AppBar from 'material-ui/AppBar';

const footerStyle = {
  bar: {
    display: 'flex',
    backgroundColor: yellow100,
    marginTop: 300,
    zIndex: 0,
    height: 100,
    right: 0,
    bottom: 0
  },
  titleBar: {
    textAlign: 'center'
  }

}

// export default function Footer(){
//   return (
//     <Paper style={footerStyle} zDepth={0} >
//       <div className="footer-paper-div" >
//         © 2017 Shaun Appelbaum
//       </div>
//     </Paper>
//   )
// }

export default function Footer(){
  return (
    <AppBar
      style={footerStyle.bar}
      title="© 2017 Shaun Appelbaum"
      titleStyle={footerStyle.titleBar} >
    </AppBar>
  )
}
