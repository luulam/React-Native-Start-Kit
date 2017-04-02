import { Platform } from 'react-native';

export function getPlatformValue(iosValue, androidValue) {
    console.log(Platform.OS)
    if (Platform.OS === 'ios') return iosValue;
    return androidValue
}
export function isNull(obj) {
    if (obj === undefined || obj === null || obj === '') return true
    return false
}
export default { getPlatformValue, isNull }