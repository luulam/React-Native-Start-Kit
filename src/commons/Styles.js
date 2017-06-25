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
        color: 'white',
        fontSize: configs.font.medium
    },
    appTitle: {
        fontWeight: 'bold',
        fontSize: configs.font.big
    }
}
