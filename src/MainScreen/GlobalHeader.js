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

export default class GlobalHeader extends Component {
    render() {
        return (
            <Header>
                <Body>
                    <Title>{this.props.title}</Title>
                </Body>
                <Right>
                    <Button
                        transparent
                        onPress={() => this.props.navigation.navigate('DrawerOpen')}
                    >
                        <Icon name="menu" />
                    </Button>
                </Right>
            </Header>
        );
    }
} 