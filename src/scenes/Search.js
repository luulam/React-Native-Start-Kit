import React, { Component } from 'react'
import { connect } from 'react-redux';
import { View, Text, TextInput } from 'react-native'
import { Header, Icon } from '../components'
import { configs, constants, arrays } from '../commons'
import { showSnackBar, showToast } from '../redux/actions/App'
import styles from './styles/Home'
class Home extends Component {
    //oprion Header
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon name='search' color={tintColor} />
        ),
    };

    state = {
        textSearch: ''
    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Header right>
                    <Icon name='search' />
                    <Text>Search</Text>
                </Header>
                <Text style={{ color: 'black', fontSize: 60 }}>Search</Text>
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