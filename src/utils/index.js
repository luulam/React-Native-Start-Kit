import { Platform } from 'react-native';

export function getPlatformValue(iosValue, androidValue) {
    if (Platform.OS === 'ios') return iosValue;
    return androidValue
}

export function isNull(obj) {
    if (obj === undefined || obj === null || obj === '') return true
    return false
}

export function getObj(obj, ...args) {
    for (let i = 0; i < args.length; i++) {
        if (!obj || obj[args[i]] === undefined) {
            return undefined;
        }
        obj = obj[args[i]];
    }
    return obj;
}

export const promise = () => action => next => (
    typeof action.then === 'function'
        ? Promise.resolve(action).then(next, (error) => { throw error })
        : next(action)
);

export default { getPlatformValue, isNull }