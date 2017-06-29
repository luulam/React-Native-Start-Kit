import { StyleSheet } from 'react-native'
import configs from './Configs'
import colors from './Colors'

export default styles = {
    appConst: {
        flex: 1,
        paddingTop: configs.statusBarHeight,
        backgroundColor: colors.background
    },
    appHor: {
        flexDirection: 'row'
    },
    appVer: {
        flexDirection: 'column'
    },
    appCenter: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    appIcon: {
        width: 30,
        height: 30,
        marginRight: 4
    },
    appLabel: {
        color: '#5D5D5D',
    },
    appTitle: {
        color: '#262626',
        fontWeight: '500'
    },
    appLine:{
        borderBottomColor: '#c9c9c9',
        borderBottomWidth: 0.4,
    }
}
