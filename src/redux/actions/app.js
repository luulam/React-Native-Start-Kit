import {configs} from '../../commons'

const uuidV4 = require('uuid/v4');

export const GET_APP = 'GET_APP'
export const ADD_SNACKBAR = 'ADD_SNACKBAR'
export const REMOVE_SNACKBAR = 'REMOVE_SNACKBAR'


export const getService = (dispatch, data) => {
    dispatch({
        type: GET_APP
    });
};

function addSnackBar(id,title) {
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
        dispatch(addSnackBar(id,title))
        setTimeout(function () {
            dispatch(hideSnackBar(id))
        }, timeout===undefined?configs.snackBarTimeShow:timeout);
    }
}
