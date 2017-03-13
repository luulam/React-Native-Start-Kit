import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Actions, ActionConst } from 'react-native-router-flux'

import { Text, View, StyleSheet, AsyncStorage, Image, Keyboard } from 'react-native'
import { FloatActionButton } from '../components'
import { scenes, configs } from '../commons'

class Home extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <FloatActionButton name='add'
                    style={{
                        bottom: 20,
                        right: 20,
                        position: 'absolute'
                    }} />
            </View>
        )
    }
}
export default Home