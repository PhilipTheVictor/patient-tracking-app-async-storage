import React, { Component } from 'react'
import { View, StatusBar } from 'react-native'
import { Container, Button, Text, Left, Right, Body, Header, Content, Icon, H2, CardItem } from 'native-base'

export class MainComponent extends Component {
    static navigationOptions = {
        header: false,
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <Container backgroundColor="lightblue">
                <StatusBar barStyle="light-content" hidden />
                <Header iconLeft backgroundColor="gray"><Left><Icon name="ios-arrow-back" onPress={() => navigate('Main')} /></Left>
                    <Body ><Text>Introduction</Text></Body></Header>
                <Content><CardItem bordered="true" >
                    <H2>This is the application which enables Doctors and other medical related
                        practictioners to keep track record of their patients so that their patients remain
                        healthy and documented.Doctors can record their patients and also view the history
                        of their patients day-by-day.
                    </H2>
                    </CardItem>
                </Content>

                <Button onPress={() => navigate('Dashboard')} bordered block dark iconLeft backgroundColor="gray">
                <Icon name="logo-dropbox" />
                    <Text>Go to Dashboard</Text>
                </Button>
            </Container>
        )
    }
} 
