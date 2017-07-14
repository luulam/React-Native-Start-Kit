import React, { Component } from 'react'
import { connect } from 'react-redux';
import { View, Text, CameraRoll } from 'react-native'
import { Icon } from '../components'
import { configs, constants, arrays } from '../commons'
import { TabNavigator, TabBarBottom, StackNavigator } from 'react-navigation'
import NewGallery from '../scenes/NewGallery'
import NewCamera from '../scenes/NewCamera'
import NewVideo from '../scenes/NewVideo'

const NewPostNavigation = StackNavigator({
    NewGallery: {
        screen: NewGallery,
    },
    NewCamera: {
        screen: NewCamera,
    },
    NewVideo: {
        screen: NewVideo,
    }
},
    {
        initialRouteName: 'NewGallery',
        headerMode: 'none'
    }
)

export default NewGallery