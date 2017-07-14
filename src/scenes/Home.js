import React, { Component } from 'react'
import { connect } from 'react-redux';
import { View, Text, ScrollView, FlatList, Image, TouchableOpacity } from 'react-native'
import { Header, Icon, Timeline } from '../components'
import { fetchApp } from '../helper'
import { configs, constants, arrays } from '../commons'
import styles from './styles/Home'
class Home extends Component {

    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon name='home' color={tintColor} />
        ),
    }

    state = {
        sourceList: require('../commons/json/home.json')
    }
    
    render() {
        const { navigate } = this.props.navigation;
        const { sourceList } = this.state
        return (
            <View style={{ flex: 1 }}>
                <Header>
                    <Text style={{ fontSize: 24, fontWeight: 'bold' }}>DEMO</Text>
                    <Icon name='photo-camera' onPress={() => this.props.navigation.navigate('Camera')} />
                    <Icon name='send' onPress={() => this.props.navigation.navigate('Messages')} />
                </Header>

                <Timeline data={sourceList} onPress={(args) => navigate('Comments', { data: args })} />

            </View >
        )
    }
}

export default Home