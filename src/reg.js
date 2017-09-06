import React, { Component } from 'react'
import { Container, Content, Form, Item, Input, Button, Text, Header, Left, Body, Icon, Label } from 'native-base'
import store from 'react-native-simple-store'


export class RegisterComponent extends Component {
    static navigationOptions = {
        header: false,
    };
    constructor(props) {
        super(props);
        this.state = { name: '', email: '', disease: '', age: '' }
        this.saveData = this.saveData.bind(this);

    }

    saveData() {
        let obj = { name: this.state.name, email: this.state.email, disease: this.state.disease, age: this.state.age, }
        store.push('items', obj)
    }
    render() {
        const { navigate } = this.props.navigation;
        return (<Container>
            <Header iconLeft backgroundColor="gray"><Left><Icon name="ios-arrow-back" onPress={() => navigate('Dashboard')} /></Left>
                <Body ><Text>Registeration</Text></Body></Header>
            <Content>
                <Form>
                    <Item floatingLabel>
                        <Label>Patient's Name</Label>
                        <Input
                            onChangeText={(name) => { this.setState({ name }) }}
                            value={this.state.name}
                        /></Item>
                    <Item floatingLabel>
                        <Label>Patient's Email</Label>
                        <Input
                            onChangeText={(email) => { this.setState({ email }) }}
                            value={this.state.email}
                        />
                    </Item>
                    <Item floatingLabel>
                        <Label>Patient's Disease</Label>
                        <Input
                            onChangeText={(disease) => { this.setState({ disease }) }}
                            value={this.state.disease}
                        /></Item>
                    <Item floatingLabel>
                        <Label>Patient's Name</Label>
                        <Input
                            onChangeText={(age) => { this.setState({ age }) }}
                            value={this.state.age}
                        /></Item>
                    <Button onPress={this.saveData} bordered block dark iconLeft backgroundColor="gray">
                        <Icon name="md-log-in" />
                        <Text>Submit</Text>
                    </Button>
                </Form>
            </Content>
        </Container>
        )
    }
}
