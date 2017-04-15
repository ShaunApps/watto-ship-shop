import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import _ from 'lodash';
import './App.css';
import { Link } from 'react-router';

import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

const tapInitOnce = _.once(() => injectTapEventPlugin());


function Link_Title() {
  return (
    <Link to="/"><span>Watto's Spaceship Emporium</span></Link>
  )
}

const appBarStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0
}

class App extends Component {
  render() {
    tapInitOnce();
    return (
      <MuiThemeProvider>
        <div className="App">
          <AppBar title="Watto's Spaceship Emporium"
                  iconElementRight={<FlatButton label="Home" />}
                  style={appBarStyle}
                  />
          {this.props.children}
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
