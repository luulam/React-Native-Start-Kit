import { configs, colors, styles } from '../../commons'

export default style = {
    ...styles,
    constant: {
        backgroundColor: '#FAFAFA',
        width: configs.screenWidth,
        height: configs.screenHeight
    },
    header: {
        backgroundColor: 'transparent',
        position: 'absolute',
        top: 0,
        width: configs.screenWidth,
        height: 56
    },
    cameraConst: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    takeCamera: {
        width: 70,
        height: 70,
        marginBottom: 10,
        alignItems: 'center',
        borderColor: 'rgba(255, 255, 255, 0.7)',
        backgroundColor: 'white',
        borderRadius: 30,
        borderWidth: 25
    }
}
