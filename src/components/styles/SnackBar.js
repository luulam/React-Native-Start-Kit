import { configs, colors } from '../../commons'

const styles = {
    constant: {
        bottom: 0,
        left: 0,
        height: configs.snackBarHeight,
        width: configs.screenWidth,
        backgroundColor: colors.snackBarbg,
        position: 'absolute',
        zIndex: 1000,
        padding: 20,
        justifyContent: 'center',
        flexDirection: 'column'
    },
}
export default styles