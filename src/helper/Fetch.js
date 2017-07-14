import { constants } from '../commons'

const getTimeline = function (arg) {
    return new Promise((resolve, reject) => {
        fetch(`${constants.TIMELINE}`)
            .then((response) => response.json())
            .then((response) => {
                resolve(response)
            })
            .catch((error) => {
                console.log('getTimeline', error)
                reject(error)
            })
    })
}

const getArticles = function (arg) {
    return new Promise((resolve, reject) => {
        fetch(`${constants.URL_SOURCE}${arg.category ? 'source=' + arg.category : ''}${arg.language ? '&sortBy=' + arg.language : ''}`)
            .then((response) => response.json)
            .then((response) => {
                resolve(response)
            })
            .catch((error) => {
                console.log('getArticles', error)
                reject(error)
            })
    })
}
export default {
    getTimeline,
    getArticles
}