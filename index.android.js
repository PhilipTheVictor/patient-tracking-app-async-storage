import React, { Component } from 'react';
import { AppRegistry,Image } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation'
import { PatientList, MainComponent, DashboardComponent, RegisterComponent } from './src'
// import { CardSection, Button, Card } from './src/common'
import { Container, Button, Text, Body, Footer, Header, Content, H1, Icon } from 'native-base'
// import { Grid, Col } from 'react-native-easy-grid'

export default class AwesomeNavigation extends Component {
  static navigationOptions = { // for title 
    header: false,
  };
  constructor(props) {
    super(props);
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container style={{ backgroundColor: '#9BDBD9' }} >
        <Content ><H1 style={{ fontFamily: 'sans-serif', fontSize: 45, color:'white',marginTop:30,marginBottom:40 }}>PATIENT TRACKING APPLICATION</H1>
        <Image circle source={ require('./imag2.jpg') } style={{height: 250,width: null, flex: 1}} />
        </Content>
        <Button onPress={() => navigate('Home')}  primary block iconLeft  style={{marginBottom : 80 }}>
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
  PatientList: { screen: PatientList }
});


AppRegistry.registerComponent('AwesomeNavigation', () => SimpleApp);
