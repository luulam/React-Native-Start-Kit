import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Actions, ActionConst } from 'react-native-router-flux'
import { Button, Text } from '../components'
import { View } from 'react-native'
import { configs } from '../commons'
import { scenes } from '../router'
import { showSnackBar } from '../redux/actions/app'

class Home extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'green' ,justifyContent:'center'}}>
                <Button onPress={() => this.props.showSnackBar('haha')} title='hahah' />
                <Button onPress={() => Actions[scenes.splash]()} title='hahah' />
            </View>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        state: state
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        showSnackBar: (data) => dispatch(showSnackBar(data))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)