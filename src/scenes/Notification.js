import React, { Component } from 'react'
import { connect } from 'react-redux';
import { TabNavigator , TabBarBottom} from 'react-navigation'
import { View, Text } from 'react-native'
import { Icon } from '../components'
import { configs, constants, arrays } from '../commons'
import { showSnackBar, showToast } from '../redux/actions/App'

class Following extends Component {
    //oprion Header
    static navigationOptions = {
        title: 'FOLLOWING',
        tabBarIcon: ({ tintColor }) => (
            <Icon name='favorite' color={tintColor} />
        ),
    };

    static state = {
        test: ''
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.appConst}>
                <Text style={{ color: 'black', fontSize: 60 }}>Notification</Text>
            </View>
        )
    }
}
class You extends Component {
    //oprion Header
    static navigationOptions = {
        title: 'YOU',
        tabBarIcon: ({ tintColor }) => (
            <Icon name='favorite' color={tintColor} />
        ),
    };

    static state = {
        test: ''
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.appConst}>
                <Text style={{ color: 'black', fontSize: 60 }}>Notification</Text>
            </View>
        )
    }
}

const Notification = TabNavigator(
    {
        Following: {
            screen: Following,
        },
        You: {
            screen: You,
        }
    },
    {
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'top',
        swipeEnabled: true,
        tabBarOptions: {
            labelStyle: {
                fontWeight:'500',
                fontSize: configs.font.medium,
            },
            activeTintColor: 'black',
            showLabel: true,
            showIcon: false,
        }
    }
)
export default Notification