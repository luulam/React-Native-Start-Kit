import React from 'react'
import { Scene, Router, ActionConst } from 'react-native-router-flux';
import { connect } from 'react-redux';

import { Home, Splash } from './scenes'

export const scenes = {
    home: 'home',
    splash: 'splash'
}

const RouterWithRedux = connect()(Router);

const RouterComponent = () => {
    return (
        <RouterWithRedux hideNavBar={true}>
            <Scene key={scenes.splash} component={Splash} initial={true} />
            <Scene key={scenes.home} component={Home} />
        </RouterWithRedux>
    )
}
export default RouterComponent