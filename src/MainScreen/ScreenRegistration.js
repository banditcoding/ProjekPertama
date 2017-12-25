import React, { Component } from "react";
import { AppRegistry, View, StatusBar, ScrollView } from "react-native";
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
    Label,
    Form,
    Grid,
    Col
} from "native-base";

import GlobalHeader from './GlobalHeader.js';

export default class ScreenRegistration extends Component {
    onSubmitForm = () => {

    };
    render() {
        return (
            <Container>
                <GlobalHeader title="Registration" {...this.props} />
                <Content>
                    <Form>
                        <Item floatingLabel>
                            <Label>Full Name</Label>
                            <Input />
                        </Item>
                        <Item floatingLabel>
                            <Label>Email</Label>
                            <Input />
                        </Item>
                        <Item floatingLabel>
                            <Label>Address</Label>
                            <Input />
                        </Item>
                        <Item floatingLabel>
                            <Label>City</Label>
                            <Input />
                        </Item>
                        <Item floatingLabel>
                            <Label>Zip Code</Label>
                            <Input />
                        </Item>
                        <Item floatingLabel>
                            <Label>Phone</Label>
                            <Input />
                        </Item>
                        <Item floatingLabel>
                            <Label>Password</Label>
                            <Input />
                        </Item>
                        <Item floatingLabel last>
                            <Label>Re-type Password</Label>
                            <Input />
                        </Item>
                    </Form>

                    <Grid style={{margin:10}}>
                        <Col>
                            <Button primary>
                                <Text>Sign Up !</Text>
                            </Button>
                        </Col>
                        <Col>
                            <Button danger>
                                <Text>Reset Form</Text>
                            </Button>
                        </Col>
                    </Grid>

                </Content>
            </Container>
        );
    }
}
