import React, { Component } from 'react'
import { TabNavigator, TabBarBottom, StackNavigator } from 'react-navigation'
import Home from './Home'
import Camera from './Camera'
import Messages from './Messages'
import Comments from './Comments'
const Navigation = TabNavigator({
  Camera: {
    screen: Camera,
  },
  Home: {
    screen: Home,
  },
  Messages: {
    screen: Messages
  }
},
  {
    initialRouteName: 'Home',
    swipeEnabled: true,
    animationEnabled: false,
    tabBarComponent: TabBarBottom,
    tabBarOptions: {
      style: {
        width: 0,
        height: 0
      }
    },

  }
)

const ModalStack = StackNavigator({
  Navigation: {
    screen: Navigation,
  },
  Comments: {
    screen: Comments,
  }
}, {
    headerMode: 'none',
    cardStyle: {
      backgroundColor: 'white'
    }
  });



export default ModalStack
