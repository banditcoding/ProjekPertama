import React, { Component } from "react";
import { AppRegistry, View, StatusBar, StyleSheet, ActivityIndicator, Image, WebView } from "react-native";
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
import Icon from 'react-native-vector-icons/FontAwesome';
import HTMLView from 'react-native-htmlview';


export default class ScreenDetailNews extends Component {
    constructor() {
        super();
        this.state = {
            refreshing: false,
            isLoading: true
        };
        console.log(this);
    }
    componentDidMount() {
        const cid = this.props.navigation.state.params.id;
        return fetch('http://main.dizysupport.website/apireact/news/get/' + cid)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    datasource: responseJson
                }, function () {
                    // do something with new state
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        if (this.state.isLoading) {
            return (
                <View style={{ flex: 1, paddingTop: 20 }}>
                    <ActivityIndicator />
                </View>
            );
        }
        const { datasource } = this.state;
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent
                            onPress={() => this.props.navigation.goBack()}
                        >
                            <Icon name="arrow-left" style={{ color: 'white', fontSize: 25 }} />
                        </Button>
                    </Left>
                    <Body />
                    <Right />
                </Header>
                <Content padder>
                    <Card style={{ flex: 0 }}>
                        <CardItem>
                            <Left>
                                <Body>
                                    <Text>{datasource.name}</Text>
                                    <Text note>{datasource.tanggal}</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Image source={{ uri: datasource.images }} style={{ height: 200, width: 200, flex: 1 }} />

                                <HTMLView value={datasource.description} />
                            </Body>
                        </CardItem>

                    </Card>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    mybutton: {
        //color: 'white',
        //fontSize: 25,
    }
});
