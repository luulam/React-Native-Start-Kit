import { configs, colors, styles } from '../../commons'

export default style = {
    ...styles,
    constant: {
        backgroundColor: '#FAFAFA',
        width: configs.screenWidth,
        height: configs.screenHeight
    },
    camera: {
        width: configs.screenWidth,
        height: configs.screenWidth
    },
    takeCamera: {
        width: 60,
        height: 60,
        alignItems: 'center',
        borderColor: 'rgba(0, 0, 0, 0.2)',
        backgroundColor: 'white',
        borderRadius: 30,
        borderWidth: 12
    }
}
