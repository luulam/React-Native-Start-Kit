import React, { Component } from 'react'
import { connect } from 'react-redux';
import { View, Text } from 'react-native'
import { Header, Icon } from '../components'
import { configs, constants, arrays } from '../commons'
import { showSnackBar, showToast } from '../redux/actions/App'
import styles from './styles/Home'
class Messages extends Component {
    //oprion Header
    static navigationOptions = {
        tabBarVisible: false
    };

    static state = {
        test: ''
    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View >
                <Header>
                    <Text style={{ fontSize: configs.font.big, fontWeight: '500', paddingHorizontal: 6 }}>Direct</Text>
                    <Icon name='arrow-back' onPress={() => this.props.navigation.navigate('Home')} />
                    <Icon name='add' />
                </Header>
                <Text style={{ color: 'black', fontSize: 60 }}>Messages</Text>
            </View>
        )
    }
}

export default Messages