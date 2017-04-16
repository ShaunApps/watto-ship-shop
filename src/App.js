import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import _ from 'lodash';
import './App.css';
import { Link } from 'react-router';
import Footer from './components/footer';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import FlatButton from 'material-ui/FlatButton';
import MenuItem from 'material-ui/MenuItem';

import Divider from 'material-ui/Divider';

import IconButton from 'material-ui/IconButton';

import {yellow200} from 'material-ui/styles/colors';

const tapInitOnce = _.once(() => injectTapEventPlugin());


function Link_Title() {
  return (
    <Link to="/"><span>Watto's Spaceship Emporium</span></Link>
  )
}

const AppStyle = {
  appBar: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0
  },

  titleBar: {
    textAlign: 'center'
  },

  sideBar: {
    backgroundColor: {yellow200},
    zIndex: 1200,
    top: 0,
    left: 0,
    position: 'fixed',
    bottom: 0
  },

  menuItem: {
    marginTop: 100
  }
};



class App extends Component {
  render() {
    tapInitOnce();
    return (
      <MuiThemeProvider>
        <div className="App">
          <AppBar title="Watto's Spaceship Emporium"
                  style={AppStyle.appBar}
                  titleStyle={AppStyle.titleBar}
                  />
          <div id="div-drawer">
            <Drawer containerStyle={AppStyle.sideBar} >
              <Divider />
                <MenuItem
                  href="https://github.com/ShaunApps/watto-ship-shop"
                  primaryText="Github"
                  style={AppStyle.menuItem}/>
            </Drawer>
          </div>
          {this.props.children}
          <Footer />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
