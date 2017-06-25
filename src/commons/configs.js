import { Dimensions, Platform } from 'react-native'

const { width, height } = Dimensions.get('window')

export const configs = {
    screenWidth: width < height ? width : height,
    screenHeight: width < height ? height : width,
    navBarHeight: (Platform.OS === 'ios') ? 64 : 54,
    statusBarHeight: 22,
    paddingHorizontal: 12,
    paddingVertical: 8,
    toolBarHeight: 54,
    borderWidth: 1,
    borderRadius: 4,
    opacityPress: .2,
    snackBar: {
        height: 54
    },
    button: {

    },
    header: {
        height: 56,
    },
    icons: {
        tiny: 15,
        small: 20,
        medium: 30,
        large: 45,
        xl: 50
    },
    images: {
        small: 20,
        medium: 40,
        large: 60,
        logo: 200
    },
    font: {
        big:16,
        medium: 14,
        small: 12,
        tiny: 8
    },
    time: {
        showToast: 1000,
        showSnackBar: 1000,
    }
}

export default configs