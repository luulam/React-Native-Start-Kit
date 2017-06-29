import React, { Component } from 'react'
import { connect } from 'react-redux';
import { View, Text, TextInput } from 'react-native'
import { Header, Icon } from '../components'
import { configs, constants, arrays } from '../commons'

class Home extends Component {
    //oprion Header
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon name='search' color={tintColor} />
        ),
    };

    state = {
        textSearch: ''
    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Header right>
                    <Icon name='search' />
                    <Text>Search</Text>
                </Header>
                <Text style={{ color: 'black', fontSize: 60 }}>Search</Text>
            </View>
        )
    }
}

export default Home