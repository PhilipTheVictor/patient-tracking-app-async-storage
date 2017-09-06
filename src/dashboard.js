import React, { Component } from 'react'
import { View, StyleSheet, Image } from 'react-native'
import { Container, Header,Text, Footer, Left, Body, Right, Content, Button, Icon } from 'native-base'
// import { Card, CardSection, Button } from './common'
// import ResponsiveImage from 'react-native-responsive-image'

export class DashboardComponent extends Component {
    static navigationOptions = {
        header: false,
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <Container>
                <Header>
                    <Left>
                        <Icon name="ios-arrow-back" onPress={() => { navigate('Home') }} />
                    </Left>
                    <Body>
                        <Text>Dashboard</Text>
                    </Body>
                </Header>
                <Content>
                <Button onPress={() => navigate('Reg')} bordered block dark iconLeft backgroundColor="gray">
                <Icon name="ios-person-add" />
                    <Text>
                        Register
                        </Text>
                </Button>
                <Button onPress={() => navigate('SearchN')} bordered block dark iconLeft backgroundColor="gray">
                <Icon name="ios-search" />
                    <Text>
                        Search By Name
                                </Text>
                </Button>
                <Button onPress={() => navigate('SearchD')} bordered block dark iconLeft backgroundColor="gray">
                    <Icon name="ios-calendar-outline" />
                    <Text>Search By Date</Text>
                </Button>
                <Button onPress={() => navigate('PatientList')} bordered block dark iconLeft backgroundColor="gray">
                <Icon name="ios-list" />
                    <Text>Patient List</Text>
                </Button>
                <Button onPress={() => alert("You have signed out successfully")} bordered block dark iconLeft backgroundColor="gray">
                    <Icon name="ios-log-out" />
                    <Text> Sign Out</Text>
                </Button>
                </Content>
            </Container>
        )
    }
}
// let styles = StyleSheet.create({
//     container : {
//         width: 400,
//         height: 1000

//     },
//     img: {
//         width: 100,
//         height: 100,
//     },
// });

