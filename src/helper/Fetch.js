import { constants } from '../commons'

export const getSources = function (arg) {
    return new Promise((resolve, reject) => {
        fetch(`${constants.URL_SOURCE}${arg.category ? 'category=' + arg.category:''}${arg.language ? '&language=' + arg.language:''}`)
            .then((response)=>{
                resolve(response)
            })
            .catch((error)=>{
                console.log('getSources',error)
                reject(error)
            })
    })
}

export const getArticles = function (arg) {
    return new Promise((resolve, reject) => {
        fetch(`${constants.URL_SOURCE}${arg.category ? 'source=' + arg.category:''}${arg.language ? '&sortBy=' + arg.language:''}`)
            .then((response)=>{
                resolve(response)
            })
            .catch((error)=>{
                console.log('getArticles',error)
                reject(error)
            })
    })
}