import { GET_APP, ADD_SNACKBAR, REMOVE_SNACKBAR } from '../actions/app'

const INITIAL = {
    snaskBars: []
};

export default (state = INITIAL, action) => {
    switch (action.type) {
        case ADD_SNACKBAR:
            return Object.assign({}, state, {
                snaskBars: state.snaskBars.concat({ id: action['id'], title: action['title'] })
            })
        case REMOVE_SNACKBAR:
            let index = state.snaskBars.findIndex(value => value['id'] === action['id'])
            return Object.assign({}, state, {
                snaskBars: [...state.snaskBars.slice(0, index), ...state.snaskBars.slice(index + 1)]
            })
        default:
            return state;
    }
};