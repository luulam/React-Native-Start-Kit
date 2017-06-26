import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';
import { View, Text } from 'react-native'
import { Header, Icon } from '../components'
import { configs, constants, arrays } from '../commons'
import { showSnackBar, showToast } from '../redux/actions/App'
import styles from './styles/Home'
class Home extends Component {
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
            <View>
                <Header>
                    <Text style={{ fontSize: configs.font.big, fontWeight: '500', paddingHorizontal: 6 }}>Direct</Text>
                    <Icon name='arrow-back' />
                    <Icon name='add' />
                </Header>
                <Text style={{ color: 'black', fontSize: 60 }}>Messages</Text>
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
        showSnackBar: (data) => dispatch(showSnackBar(data)),
        showToast: (data) => dispatch(showToast(data))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)