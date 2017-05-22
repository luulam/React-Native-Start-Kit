import { configs } from '../../commons'

const uuidV4 = require('uuid/v4');

export const ADD_SNACKBAR = 'ADD_SNACKBAR'
export const REMOVE_SNACKBAR = 'REMOVE_SNACKBAR'
export const ADD_TOAST = 'ADD_TOAST'
export const REMOVE_TOAST = 'REMOVE_TOAST'

// action of TOAST
function addSnackBar(id, title) {
    return {
        type: ADD_SNACKBAR,
        id: id,
        title: title,
    }
}

function hideSnackBar(id) {
    return {
        type: REMOVE_SNACKBAR,
        id: id,
    }
}

export function showSnackBar(title, timeout) {
    return dispatch => {
        let id = uuidV4()
        dispatch(addSnackBar(id, title))
        setTimeout(function () {
            dispatch(hideSnackBar(id))
        }, timeout === undefined ? configs.time.showSnackBar : timeout);
    }
}

// action of SNACKBAR 
function addToast(id, title) {
    return {
        type: ADD_TOAST,
        id: id,
        title: title,
    }
}

function hideToast(id) {
    return {
        type: REMOVE_TOAST,
        id: id,
    }
}

export function showToast(title, timeout) {
    return dispatch => {
        let id = uuidV4()
        dispatch(addToast(id, title))
        setTimeout(function () {
            dispatch(hideToast(id))
        }, timeout === undefined ? configs.time.showSnackBar : timeout);
    }
}
