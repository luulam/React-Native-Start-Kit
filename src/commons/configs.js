import { Dimensions, Platform } from 'react-native'

const { width, height } = Dimensions.get('window')

const configs = {
    screenWidth: width < height ? width : height,
    screenHeight: width < height ? height : width,
    navBarHeight: (Platform.OS === 'ios') ? 64 : 54,
    snackBarHeight: 54,
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
        h1: 38,
        h2: 34,
        h3: 30,
        h4: 26,
        h5: 20,
        h6: 19,
        input: 18,
        regular: 17,
        medium: 14,
        small: 12,
        tiny: 8.5
    },
    time: {
        showToast: 1000,
        showSnackBar: 1000,
    }
}

export default configs
