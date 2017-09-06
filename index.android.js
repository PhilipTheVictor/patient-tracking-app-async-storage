import React, { Component } from 'react';
import { AppRegistry, Image } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation'
import { PatientList, MainComponent, DashboardComponent, RegisterComponent, SearchByDateComponent, SearchByNameComponent } from './src'
// import { CardSection, Button, Card } from './src/common'
import { Container, Button, Text, Body, Footer, Header, Content, H1, Icon } from 'native-base'
// import { Grid, Col } from 'react-native-easy-grid'

export default class AwesomeNavigation extends Component {
  static navigationOptions = { // for title 
    header: false,
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container style={{ backgroundColor: 'lightblue' }} >
        <Content ><Text style={{ fontFamily: 'Times New Roman', fontSize: 45 }}>PATIENT TRACKING APPLICATION</Text>
        </Content>
        <Button onPress={() => navigate('Home')} bordered block dark iconLeft backgroundColor="gray">
          <Icon name="ios-book" />
          <Text> Get Started!</Text>
        </Button>
      </Container>
    );
  }
}

const SimpleApp = StackNavigator({
  Main: { screen: AwesomeNavigation },
  Home: { screen: MainComponent },
  Dashboard: { screen: DashboardComponent },
  Reg: { screen: RegisterComponent },
  SearchD: { screen: SearchByDateComponent },
  SearchN: { screen: SearchByNameComponent },
  PatientList: { screen: PatientList }
});


AppRegistry.registerComponent('AwesomeNavigation', () => SimpleApp);
