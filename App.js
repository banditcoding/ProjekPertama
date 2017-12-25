import React, { Component } from "react";
import { View } from "react-native";
import { Container, Content, Picker, Button, Text } from "native-base";
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import FCM from "react-native-fcm";

import MainScreen from './src/MainScreen/index.js';
import DetailNewsScreen from './src/MainScreen/ScreenDetailNews.js';
import SideBar from './src/MainScreen/SideBar.js';

const RootNavigation = DrawerNavigator({
  Home: {
    screen: MainScreen,
  },
  DetailNews: {
    path: 'news/:id',
    screen: DetailNewsScreen,
  },
}, {
    headerMode: 'none',
    drawerPosition: 'right',
    contentComponent: props => <SideBar {...props} />
  }
);

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fcm_token: ""
    };
  }
  componentDidMount() {
    //FCM.requestPermissions();
    //FCM.getFCMToken().then(token => {
    //  this.setState({ fcm_token: token });
      //update your fcm token on server.
    //});
  }

  render() {
    return (<RootNavigation {...this.props} />);
  }
}
