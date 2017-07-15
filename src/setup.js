import React, { Component } from 'react'
import { connect } from 'react-redux';
import { View, StatusBar, Platform } from 'react-native'
import { configs, styles } from './commons'
import { SnackBar, Toast } from './components'

class Setup extends Component {
    render() {
        return (
            <View style={styles.app}>
                {this.props.children}
                <SnackBar />
                <Toast />
                <StatusBar barStyle="dark-content"
                    translucent={true}
                    backgroundColor='transparent' />
            </View>
        )
    }
}

export default Setup