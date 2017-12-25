import React, { Component } from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text, Left, Body, Title, Right } from 'native-base';
import LayoutFooter from '../app-src/LayoutFooter.js';

import { contoh } from '../app-src/GlobalFunctions.js';
contoh.showalert();

export default class App extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Judul-Header</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Right>
        </Header>
        <Content />
        <LayoutFooter />
      </Container>
    );
  }
}
