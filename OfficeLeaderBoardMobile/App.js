import React, { Component } from 'react';
import { Platform } from 'react-native';
// import {createAppContainer} from 'react-navigation';
// import Navigation from './components/Navigator';
// import {HomeScreen} from './components/Screens.js';
import AppNavigator from './components/Navigator.js';



const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu',
});

export default class App extends Component {
 
  render() {
    return  <AppNavigator/>
  }
}

// const App = createAppContainer(Navigation);

// export default App;


