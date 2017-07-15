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
        ...styles.appLine,
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
    },
    constHeader: {
        flexDirection: 'row',
        marginTop: 1,
        paddingHorizontal: 12,
        paddingVertical: 6,
        justifyContent: 'space-between',
        borderBottomColor: colors.cover
    },
    header: {
        paddingVertical: 6,
        borderBottomColor: colors.cover,
        borderBottomWidth: 0.3
    }
}
