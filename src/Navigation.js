import React from 'react'
import { Platform } from 'react-native'
import { StackNavigator } from 'react-navigation';

import Home from './scenes/Home'

ScenesApp = {
  Home: {
    screen: Home,
  }
}
const AppNavigator = StackNavigator({
  ...ScenesApp
}, {
    initialRouteName: 'Home',
    mode: Platform.OS === 'ios' ? 'modal' : 'card',
    headerMode: 'none'
  });

export default AppNavigator