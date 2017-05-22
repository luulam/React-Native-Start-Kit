import { Platform, AsyncStorage } from 'react-native';

export function getPlatformValue(iosValue, androidValue) {
    if (Platform.OS === 'ios') return iosValue;
    return androidValue
}

export function isNull(obj) {
    if (obj === undefined || obj === null || obj === '' || obj.length <= 0) return true
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
)

// check object exist array
export function checkObjectInArray(object, array) {
    if (array.indexOf(object) === -1) return false
    return true
}


// -- asynStorage --

/**
 * - get multi value to asyncStorage
 * param : [object]
 * return promise
 */
export function asynStorageGet (...args) {
    
    if (!args) return undefined

    if (args.length === 1 ){
        return new Promise((resolve,reject)=>{
            AsyncStorage.getItem(args[0], (err, result) => {
                if (err !== null) reject(err)
                resolve (result)
            });
        })
    }

    let listPromise = []
    for (let arg of args){
        listPromise.push(new Promise((resolve,reject)=>{
            AsyncStorage.getItem(arg, (err, result) => {
                if (err !== null) reject(err)
                resolve (result)
            });
        }))
    }
    return new Promise.all(listPromise)
}


/**
 * -- save multi to asyncStorage
 * param : [object]
 * return promise
 */
export function asynStorageSave (...args) {

    if (!args) return undefined
    
    if (args.length === 1 ){
        return new Promise((resolve,reject)=>{
            AsyncStorage.setItem(Object.keys(args[0]).toString(),args[0][Object.keys(args[0])], (err) => {
                if (err !== null) reject(err)
                resolve()
            });
        })
    }
    
    let listPromise = []
    for (let arg of args){
        listPromise.push(new Promise((resolve,reject)=>{
            AsyncStorage.setItem(Object.keys(arg).toString(),arg[Object.keys(arg)], (err) => {
                if (err !== null) reject(err)
                resolve()
            });
        }))
    }
    return new Promise.all(listPromise)
}


export default { getPlatformValue, isNull }