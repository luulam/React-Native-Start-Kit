import React, { Component } from 'react'
import { connect } from 'react-redux';
import { View, Text } from 'react-native'
import { Header, Icon } from '../components'
import { configs, constants, arrays } from '../commons'
import { showSnackBar, showToast } from '../redux/actions/App'
import styles from './styles/Home'
class Home extends Component {
    //oprion Header
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon name='home' color={tintColor} />
        ),
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Header>
                    <Text style={{ fontSize: 24, fontWeight: 'bold' }}>DEMO</Text>
                    <Icon name='photo-camera' onPress={() => this.props.navigation.navigate('Camera')} />
                    <Icon name='send' onPress={() => this.props.navigation.navigate('Messages')} />
                </Header>
                <Text style={{ color: 'black', fontSize: 60 }}>Home</Text>
            </View>
        )
    }
}

export default Home