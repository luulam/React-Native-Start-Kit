import { AsyncStorage } from 'react-native';
/**
 * 
 * @param {*string} args 
 * @return {promise}
 */
const get = function (...args) {
    return new Promise.all(args.map((v, i) => {
        return new Promise((resolve, reject) => {
            AsyncStorage.getItem(v, (err, result) => {
                if (err !== null) reject(err)
                resolve(result)
            });
        })
    }))
}


/**
 * -- save multi to asyncStorage
 * @param {object{[key:value]}} args
 * @return {promise}
 */

const set = function (args) {
    return new Promise.all(Object.keys(args).map((v, i) => {
        return new Promise((resolve, reject) => {
            AsyncStorage.setItem(v, args[v], (err) => {
                if (err !== null) reject('Appstorage set', err)
                resolve()
            });
        })
    }))
}


export default {
    get, set
}