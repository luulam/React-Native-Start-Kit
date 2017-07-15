import React, { Component } from 'react'
import { connect } from 'react-redux';
import { TabNavigator, TabBarBottom } from 'react-navigation'
import { View, Text, Image, FlatList } from 'react-native'
import { Icon, Header } from '../components'
import { configs, constants, arrays, colors } from '../commons'
import { showSnackBar, showToast } from '../redux/actions/App'
import styles from './styles/Notification'

// class Following extends Component {
//     //oprion Header
//     static navigationOptions = {
//         title: 'FOLLOWING',
//         tabBarIcon: ({ tintColor }) => (
//             <Icon name='favorite' color={tintColor} />
//         ),
//     };

//     static state = {
//         test: ''
//     }

//     render() {
//         const { navigate } = this.props.navigation;
//         return (
//             <View style={styles.appConst}>
//                 <Text style={{ color: 'black', fontSize: 60 }}>Notification</Text>
//             </View>
//         )
//     }
// }
class You extends Component {
    //oprion Header
    static navigationOptions = {
        title: 'YOU',
        tabBarIcon: ({ tintColor }) => (
            <Icon name='favorite' color={tintColor} />
        ),
    };

    state = {
        data: require('../commons/json/noti.json')
    }
    renderNoti = ({ item }) => {
        return <View style={{ flexDirection: 'row', paddingHorizontal: 12, paddingVertical: 6, alignItems: 'center' }}>
            <Image style={styles.imgAvata} source={{ uri: item['profile']['image'] }} />
            <Text style={{ flex: 1, paddingHorizontal: 12 }}>{item['content']}</Text>
            {item['type'] == 1 ?
                <View style={item['follow'] ? styles.btnFollowing : styles.btnFollow}>
                    <Text style={{ color: item['follow'] ? 'gray' : 'white' }}>{item['follow'] ? 'fowllowing' : 'follow'}</Text>
                </View>
                : <Image style={styles.imgPost} source={{ uri: item['image'] }} />}
        </View>
    }
    render() {

        const { navigate } = this.props.navigation;
        const { data } = this.state
        console.log('kajhsdkjasd', data)
        return (
            <View >
                <Header>
                    <Text style={{ fontSize: configs.font.big, fontWeight: '500', paddingHorizontal: 6 }}>Notification</Text>
                </Header>
                <FlatList
                    style={{ height: configs.screenHeight }}
                    removeClippedSubviews={false}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index}
                    data={data['you']}
                    renderItem={this.renderNoti}
                />
            </View>
        )
    }
}

// const Notification = TabNavigator(
//     {
//         Following: {
//             screen: Following,
//         },
//         You: {
//             screen: You,
//         }
//     },
//     {
//         initialRouteName: 'You',
//         tabBarComponent: TabBarBottom,
//         tabBarPosition: 'top',
//         swipeEnabled: true,
//         tabBarOptions: {
//             labelStyle: {
//                 fontWeight: '500',
//                 fontSize: configs.font.medium,
//             },
//             activeTintColor: 'black',
//             showLabel: true,
//             showIcon: false,
//         }
//     }
// )
export default You