import React, { Component } from "react";
import { AppRegistry, View, StatusBar } from "react-native";
import {
    Button,
    Text,
    Container,
    Card,
    CardItem,
    Body,
    Content,
    Header,
    Left,
    Right,
    Icon,
    Title,
    Input,
    InputGroup,
    Item,
    Tab,
    Tabs,
    Footer,
    FooterTab,
    Label
} from "native-base";

import GlobalHeader from './GlobalHeader.js';

export default class ScreenDashboard extends Component {
    render() {

        return (
            <Container>
                <GlobalHeader title="Home" {...this.props} />
                <Content padder>
                    <Text>Home Screen</Text>
                </Content>
            </Container>
        );
    }
}
