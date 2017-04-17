import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import _ from 'lodash';
import './App.css';
import { Link } from 'react-router';
import Footer from './components/footer';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import FlatButton from 'material-ui/FlatButton';
import MenuItem from 'material-ui/MenuItem';
import Toggle from 'material-ui/Toggle';


import ActionHome from 'material-ui/svg-icons/action/home';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import {yellow200, grey50} from 'material-ui/styles/colors';

import watto from './images/Watto2.png';
const tapInitOnce = _.once(() => injectTapEventPlugin());

const AppStyle = {
  appBar: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0
  },
  titleBar: {
    textAlign: 'center',
    color: grey50
  },
  sideBar: {
    bottom: 0
  },
  menuItem: {
    marginTop: 100,
  },
  homeIcon: {
    width: 36,
    height: 36,
  },
  homeStyle: {
    width: 72,
    height: 72,
    padding: 16,
  }
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: darkBaseTheme
    };
  }

  handleToggle = (event, toggle) => {
    toggle = toggle ? darkBaseTheme : lightBaseTheme;
    this.setState({theme: toggle});
  };


  render() {
    tapInitOnce();
    let theme = this.state.theme;
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(theme)}>
        <div className="App">
          <AppBar title="Watto's Spaceship Emporium"
                  style={AppStyle.appBar}
                  titleStyle={AppStyle.titleBar}
                  iconElementLeft={<IconButton
                                    iconStyle={AppStyle.homeIcon}
                                    style={AppStyle.homeStyle}
                                    href={<Link to={"/"} />}
                                    >
                                    <ActionHome />
                                  </IconButton> }
                                                />
          <div id="div-drawer">
            <Drawer containerStyle={AppStyle.sideBar} >
              <img src={watto} className="watto-image" />
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
