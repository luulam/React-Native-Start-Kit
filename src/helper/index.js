import { Platform, AsyncStorage } from 'react-native';
import { configs } from '../commons'
import fetchApp from './Fetch'
import asyncSto from './AsyncStorage'
const getPlatformValue = function (iosValue, androidValue) {
    if (Platform.OS === 'ios') return iosValue;
    return androidValue
}

const isNull = function (obj) {
    if (obj === undefined || obj === null || obj === '' || obj.length <= 0) return true
    return false
}

const getObj = function (obj, ...args) {
    for (let i = 0; i < args.length; i++) {
        if (!obj || obj[args[i]] === undefined) {
            return undefined;
        }
        obj = obj[args[i]];
    }
    return obj;
}
const coveSize = (ratio) => {
    if (ratio < 1) return {
        height: configs.screenWidth,
        width: configs.screenWidth * (ratio)
    }
    return {
        width: configs.screenWidth,
        height: configs.screenWidth / (ratio)
    }
}
const promise = () => action => next => (
    typeof action.then === 'function'
        ? Promise.resolve(action).then(next, (error) => { throw error })
        : next(action)
)

// check object exist array
const checkObjectInArray = function (object, array) {
    if (array.indexOf(object) === -1) return false
    return true
}

export {
    getPlatformValue,
    isNull,
    getObj,
    promise,
    coveSize,
    checkObjectInArray,
    fetchApp,
    asyncSto,
    
}