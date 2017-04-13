import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import _ from 'lodash';
import './App.css';

import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import AppBar from 'material-ui/AppBar';

const tapInitOnce = _.once(() => injectTapEventPlugin());

class App extends Component {
  render() {
    tapInitOnce();
    return (
      <MuiThemeProvider>
        <div className="App">

          <AppBar title="Watto's Spaceship Emporium"
                  iconClassNameRight="muidocs-icon-navigation-expand-more"
                  />
          {this.props.children}
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
