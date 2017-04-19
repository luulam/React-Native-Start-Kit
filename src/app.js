import React, { Component } from 'react'
import { connect } from 'react-redux';

import { Text, View, StyleSheet, AsyncStorage, Image, Keyboard } from 'react-native'
import { scenes, configs } from './commons'
import {SnackBar} from './components'
class App extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                {this.props.children}
                 <SnackBar></SnackBar>
            </View>
        )
    }
}

export default App