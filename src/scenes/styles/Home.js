import { configs, colors, styles } from '../../commons'

export default style = {
    ...styles,
    constant: {
        backgroundColor: '#FAFAFA',
        width: configs.screenWidth,
        height: configs.screenHeight
    },
    iconTabbg: {
        borderRadius: 8,
        padding: 4
    },
    headerPost: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 48,
        borderBottomColor: '#c9c9c9',
        borderBottomWidth: 0.2,
        paddingHorizontal: 14

    },
    headerIcon: {
        width: 30,
        height: 30,
        borderRadius: 15
    },
    comment: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 4
    }
}
