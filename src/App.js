import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { StyleSheet, css } from 'aphrodite';
import './App.css';

import {getWidth, getHeight} from './utils/config';
import ProfilePicture from './containers/ProfilePicture';
import Links from './containers/Links';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className={css(styles.app)}>
           <ProfilePicture />
           <Links/>
        </div>
      </MuiThemeProvider>
    );
  }
}

const styles = StyleSheet.create({
    app: {
       display: 'flex',
       flex: 1,
       flexDirection:'column',
       justifyContent: 'flex-start',
       height: getHeight(),
       width: getWidth(),
       backgroundColor: '#008080',
    }
});

export default App;
