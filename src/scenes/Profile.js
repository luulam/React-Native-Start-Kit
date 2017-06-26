import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';
import { View, Text } from 'react-native'
import { Icon, Header } from '../components'
import { configs, constants, arrays } from '../commons'
import { showSnackBar, showToast } from '../redux/actions/App'
import styles from './styles/Home'
class Home extends Component {
    //oprion Header
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon name='person' color={tintColor} />
        ),
    };

    static state = {
        test: ''
    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View >
                <Header left>
                    <Text style={{ fontSize: configs.font.big, fontWeight: '500', paddingHorizontal: 6 }}>luu_the_lam</Text>
                    <Icon name='restore' />
                    <Icon name='person-add' />
                    <Icon name='more-vert' />
                </Header>
                <Text style={{ color: 'black', fontSize: 60 }}>Profile</Text>
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