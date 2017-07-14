import { configs, colors, styles } from '../../commons'

export default style = {
    ...styles,
    constHeader: {
        flexDirection: 'row',
        height: configs.screenWidth / 3.5
    },
    imgProfile: {
        width: configs.screenWidth / 4.5,
        height: configs.screenWidth / 4.5,
        borderRadius: configs.screenWidth / 9
    },
    constIndex: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingHorizontal: 12
    },
    ctType: {
        borderBottomColor: colors.cover,
        borderTopColor: colors.cover,
        borderTopWidth: 0.5,
        borderBottomWidth: 0.5,
        paddingVertical: 6,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    imgOnly: {
        margin: 0.5,
        width: configs.screenWidth / 3 - 1,
        height: configs.screenWidth / 3 - 1
    }
}


