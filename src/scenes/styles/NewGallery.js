import { configs, colors, styles } from '../../commons'

export default style = {
    ...styles,
    imageSelect: {
        justifyContent: 'center',
        alignItems: 'center',
        width: configs.screenWidth,
        height: configs.screenWidth
    },
    btnChangeViewImage: {
        borderRadius: 30,
        backgroundColor: colors.cover,
        position: 'absolute',
        bottom: 10,
        left: 10
    },
    imgArr: {
        margin: 0.5,
        width: configs.screenWidth / 4 - 1,
        height: configs.screenWidth / 4 - 1
    }
}
