import React, { Component } from 'react'
// import { View, Text } from 'react-native'
import { Container, Content, Text, Header, Left, Body, Right, Icon, Button,Item,Input } from 'native-base'

export class SearchByNameComponent extends Component {
    static navigationOptions = {
        header: false,
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <Container>
                        <Header searchBar rounded>
                            <Item>
                                <Icon name="ios-search" />
                                <Input placeholder="Search" />
                                <Icon name="ios-people" />
                            </Item>
                            <Button transparent>
                                <Text>Search By Name</Text>
                            </Button>
                        </Header>
                <Content>
    <Button bordered block dark iconLeft backgroundColor="gray" onPress={() => {navigate('Dashboard')}} >
 <Icon name="ios-arrow-back" onPress={() => { navigate('Dashboard') }} />
<Text>Back</Text>
    </Button>
                </Content>
            </Container>
        )
    }
} 
