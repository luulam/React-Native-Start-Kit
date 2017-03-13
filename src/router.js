import React from 'react'
import { Scene, Router, ActionConst } from 'react-native-router-flux';

import {scenes} from './commons'

import { connect } from 'react-redux';

import home from './scenes/home'


const RouterWithRedux = connect()(Router);

const RouterComponent = () => {
    return (
        <RouterWithRedux hideNavBar={true}>
            <Scene key={scenes.home} component={home} initial={true} />
        </RouterWithRedux>
    )
}
export default RouterComponent