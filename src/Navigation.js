

import React from 'react'
import { Platform } from 'react-native'
import { TabNavigator , TabBarBottom } from 'react-navigation';

import Main from './scenes/Main'
import Search from './scenes/Search'
import NewPost from './scenes/NewPost'
import Notification from './scenes/Notification'
import Profile from './scenes/Profile'

const AppNavigator = TabNavigator(
    {
        Main: {
            screen: Main,
        },
        Search: {
            screen: Search,
        },
        NewPost: {
            screen: NewPost,
        },
        Notification: {
            screen: Notification,
        },
        Profile: {
            screen: Profile,
        }
    },
    {
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        swipeEnabled: false,
        tabBarOptions: {
            activeTintColor: 'black',
            showLabel: false,
            showIcon: true,
        }
    }
)

export default AppNavigator