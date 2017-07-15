import { configs, colors, styles } from '../../commons'

export default style = {
    ...styles,
    imgAvata: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    imgPost: {
        width: 40,
        height: 40
    },
    btnFollowing: {
        ...styles.appPaddingButton,
        borderWidth: 1,
        borderColor: colors.cover
    },
    btnFollow: {
        ...styles.appPaddingButton,
        backgroundColor: colors.accent
    }
}


