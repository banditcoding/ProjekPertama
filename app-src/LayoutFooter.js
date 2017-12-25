import React, { Component } from 'react';
import { Footer, FooterTab, Button, Text} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class LayoutFooter extends Component{
    render(){
        return (
        <Footer>
          <FooterTab>
            <Button vertical active>
              <Icon name="home" />
              <Text>Home</Text>
            </Button>
            <Button vertical>
              <Icon name="list-alt" />
              <Text>News</Text>
            </Button>
            <Button vertical>
              <Icon active name="user" />
              <Text>Registration</Text>
            </Button>
          </FooterTab>
        </Footer>
        );
    }
} 