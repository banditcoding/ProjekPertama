import React, { Component } from "react";
import { TabNavigator } from "react-navigation";
import {
  Button,
  Text,
  Item,
  Footer,
  FooterTab,
  Label
} from "native-base";
import ScreenDashboard from './ScreenDashboard.js';
import ScreenNewsList from './ScreenNewsList.js';
import ScreenRegistration from './ScreenRegistration.js';
import Icon from 'react-native-vector-icons/FontAwesome';

class TabIcon extends Component {
  render() {

    return (
      <Icon name={this.props.name} style={{ fontSize: 25, color: 'white' }} />
    );
  }
}
const MainScreenNavigator = TabNavigator(
  {
    ScreenDashboard: { screen: ScreenDashboard },
    ScreenNewsList: { screen: ScreenNewsList },
    ScreenRegistration: { screen: ScreenRegistration }
  },
  {
    tabBarPosition: "bottom",
    tabBarComponent: props => {
      return (
        <Footer>
          <FooterTab>
            <Button
              vertical
              active={props.navigationState.index === 0}
              onPress={() => props.navigation.navigate("ScreenDashboard")}
            >
              <TabIcon name="home" />
              <Text>Home</Text>
            </Button>
            <Button
              vertical
              active={props.navigationState.index === 1}
              onPress={() => props.navigation.navigate("ScreenNewsList")}
            >
              <TabIcon name="list-alt" />
              <Text>News</Text>
            </Button>
            <Button
              vertical
              active={props.navigationState.index === 2}
              onPress={() => props.navigation.navigate("ScreenRegistration")}
            >
              <TabIcon name="user-plus" />
              <Text>Registration</Text>
            </Button>
          </FooterTab>
        </Footer>
      );
    },
    swipeEnabled: false,
    animationEnabled: false,
    lazy: false
  }
);
export default MainScreenNavigator;
