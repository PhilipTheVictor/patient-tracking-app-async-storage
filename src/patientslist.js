import React, { Component } from 'react'
import { AsyncStorage, View, Text } from 'react-native'
import { Container, Content, Header, List, ListItem,Card,CardItem,Body,Left,Icon } from 'native-base'
import store from 'react-native-simple-store'

export class PatientList extends Component {
    static navigationOptions = {
        header: false,
    };

    constructor(props) {
        super(props);
        this.state = {
            res: []
        }
    }

    componentWillMount() {
        store.get('items').then((res) => {
            this.setState({ res })
        })
    }


    render() {
        const { navigate } = this.props.navigation;
        const listofpat = this.state.res
        return (
            <Container>
                <Header>
                    <Left>
                        <Icon name="ios-arrow-back" onPress={() => { navigate('Dashboard') }} />
                    </Left>
                    <Body>
                        <Text>Patient List</Text>
                    </Body>
                </Header>
                <Content>
                    <List>
                    {
                        this.state.res.map((d, i) => {
                            return (
                                <Card>
                                <ListItem key={i}>
                                    <CardItem header>
                                    <Text>{d.name}</Text>
                                    </CardItem>
                                    <Body>
                                        <Text>{d.age}</Text>
                                        <Text>{d.email}</Text>
                                        <Text>{d.disease}</Text>
                                        </Body></ListItem>
                            </Card>
                            )
                        })
                    }
                    </List>
                </Content>
            </Container>
        )
    }
}
