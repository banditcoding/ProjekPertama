import React, { Component } from "react";
import {
    AppRegistry, View, StatusBar, ScrollView, Image, FlatList, TouchableOpacity,
    RefreshControl, ActivityIndicator, ListView
} from "react-native";
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


class MyListItem extends React.Component {
    constructor(props) {
        super(props);
        //console.log(this);
    }

    _onPress = () => {
        //alert(this.props.id);
        const cid = this.props.id;
        //this.props.navigation.navigate("DetailNewsScreen", { id: cid });
        //console.log(this);
        this.props.navigation.navigate('DetailNews', { id: cid });
    };
    render() {
        return (
            <TouchableOpacity onPress={this._onPress} >
                <Card>
                    <CardItem cardBody>
                        <Image source={{ uri: this.props.image_uri }} style={{ height: 200, width: null, flex: 1 }} />
                    </CardItem>
                    <CardItem footer>
                        <Text>{this.props.title}</Text>
                    </CardItem>
                </Card>
            </TouchableOpacity>
        );
    }
}


async function getLatesNewsApi() {
    try {
        let response = await fetch(
            'http://apireact.dizysupport.website/news/latest'
        );
        let responseJson = await response.json();
        return responseJson;
    } catch (error) {
        console.error(error);
    }
}

export default class ScreenNewsList extends React.PureComponent {
    tempdata = [
        {
            id: 1,
            url_gambar: 'http://img.dizysupport.website/imgc/izy_core-subdomain/news/komputer/news2.jpg',
            judul: 'Vivamus sit amet vehicula arcu. Nam fringilla lobortis est, quis elementum dolor rutrum sed.'
        },
        {
            id: 2,
            url_gambar: 'http://img.dizysupport.website/imgc/izy_core-subdomain/news/komputer/news2.jpg',
            judul: 'Vivamus sit amet vehicula arcu. Nam fringilla lobortis est, quis elementum dolor rutrum sed.'
        },
        {
            id: 3,
            url_gambar: 'http://img.dizysupport.website/imgc/izy_core-subdomain/news/komputer/news2.jpg',
            judul: 'Vivamus sit amet vehicula arcu. Nam fringilla lobortis est, quis elementum dolor rutrum sed.'
        },
        {
            id: 4,
            url_gambar: 'http://img.dizysupport.website/imgc/izy_core-subdomain/news/komputer/news2.jpg',
            judul: 'Vivamus sit amet vehicula arcu. Nam fringilla lobortis est, quis elementum dolor rutrum sed.'
        },
        {
            id: 5,
            url_gambar: 'http://img.dizysupport.website/imgc/izy_core-subdomain/news/komputer/news2.jpg',
            judul: 'Vivamus sit amet vehicula arcu. Nam fringilla lobortis est, quis elementum dolor rutrum sed.'
        }
    ];


    constructor(props) {
        super(props);
        this.state = {
            refreshing: false,
            isLoading: true,
            datasource: []
        };

    }

    componentDidMount() {
        //let adata = getLatesNewsApi();
        //this.setState({ isLoading: false, datasource: adata });

        return fetch('http://apireact.dizysupport.website/news/latest')
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
    onItemPress(id) {
        //alert('id' + id);
        //console.log(this);
        this.props.navigation.navigate('DetailNews', { id: id });
    }

    _onRefresh() {
        this.setState({ refreshing: true });
        alert('o yeah');
        setTimeout(function () {
            this.setState({ refreshing: false });
        }, 3000);
    }

    _renderItem = ({ item }) => (
        <MyListItem
            id={item.id}
            title={item.judul}
            image_uri={item.url_gambar}
            {...this.props}
        />
    );

    render() {
        if (this.state.isLoading) {
            return (
                <View style={{ flex: 1, paddingTop: 20 }}>
                    <ActivityIndicator />
                </View>
            );
        }
        return (
            <Container>
                <GlobalHeader title="News" {...this.props} />
                <ScrollView>
                    <FlatList
                        data={this.state.datasource}
                        extraData={this.state.datasource}
                        renderItem={this._renderItem}
                        keyExtractor={(item, index) => item.id}
                    />
                </ScrollView>
            </Container>
        );
    }
}
