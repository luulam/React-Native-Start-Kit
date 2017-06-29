import { configs, colors, styles } from '../../commons'

export default style = {
    ...styles,
    constant: {
        backgroundColor: '#FAFAFA',
        width: configs.screenWidth,
        height: configs.screenHeight
    },
    inputBg: {
        backgroundColor:'white',
        width: configs.screenWidth,
        flexDirection: 'row',
        height: 48,
        alignItems: 'center',
        borderTopColor: '#c9c9c9',
        borderTopWidth: 1,
    },
    sendbg: {
        backgroundColor: '#40C4FF',
        height: 48,
        width: 52,
        alignItems: 'center',
        justifyContent: 'center'
    }
}
