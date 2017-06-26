import React, { Component } from 'react'
import { TabNavigator } from 'react-navigation'
import Home from './Home'
import Camera from './Camera'
import Messages from './Messages'

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
    tabBarOptions: {
      style: {
        width: 0,
        height: 0
      }
    },
    initialRouteName: 'Home',
    swipeEnabled: true,
  }
)

export default Navigation
