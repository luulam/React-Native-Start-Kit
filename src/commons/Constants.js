//apikey newsapi.org
export const API_KEY = 'bd6a346fbc934d0eb691c04320661937'

//url
export const URL_BASE = 'https://newsapi.org/'
export const URL_VESSION = 'v1/'
export const URL_SOURCE = `${URL_BASE}${URL_VESSION}sources?`
export const URL_ARTICLE = `${URL_BASE}${URL_VESSION}article?apiKey=${API_KEY}`

//asynStorage
export const ASYN_STO_LANGUAGE = 'ASYN_STO_LANGUAGE'
export const ASYN_STO_CATEGORY = 'ASYN_STO_CATEGORY'

export default {
    URL_BASE,
    URL_VESSION,
    URL_SOURCE,
    URL_ARTICLE,

    ASYN_STO_LANGUAGE,
    ASYN_STO_CATEGORY
}