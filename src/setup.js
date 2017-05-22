import React, { Component } from 'react'
import { connect } from 'react-redux';

import { Text, View, StyleSheet, AsyncStorage, Image, Keyboard, StatusBar } from 'react-native'
import { scenes, configs } from './commons'
import { SnackBar, Toast } from './components'
class Setup extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                {this.props.children}
                <SnackBar />
                <Toast />
                <StatusBar
                    barStyle="light-content" />
            </View>
        )
    }
}

export default Setup