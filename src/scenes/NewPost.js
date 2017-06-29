import React, { Component } from 'react'
import { connect } from 'react-redux';
import { View, Text } from 'react-native'
import { Icon } from '../components'
import { configs, constants, arrays } from '../commons'

class NewPost extends Component {
    //oprion Header
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon name='add-box' color={tintColor} size={34} />
        ),
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.appConst}>
                <Text style={{ color: 'black', fontSize: 60 }}>NewPost</Text>
            </View>
        )
    }
}

export default NewPost