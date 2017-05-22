import { GET_APP, ADD_SNACKBAR, REMOVE_SNACKBAR, ADD_TOAST, REMOVE_TOAST } from '../actions/App'

const INITIAL = {
    snaskBars: [],
    toasts: []
};

export default (state = INITIAL, action) => {
    switch (action.type) {
        case ADD_SNACKBAR:
            return Object.assign({}, state, {
                snaskBars: state.snaskBars.concat({
                    id: action['id'],
                    title: action['title']
                })
            })
        case REMOVE_SNACKBAR:
            let indexSnasckBar = state.snaskBars.findIndex(value => value['id'] === action['id'])
            return Object.assign({}, state, {
                snaskBars: [...state.snaskBars.slice(0, indexSnasckBar), ...state.snaskBars.slice(indexSnasckBar + 1)]
            })
        case ADD_TOAST:
            return Object.assign({}, state, {
                toasts: state.toasts.concat({
                    id: action['id'],
                    title: action['title']
                })
            })
        case REMOVE_TOAST:
            let indexToast = state.toasts.findIndex(value => value['id'] === action['id'])
            return Object.assign({}, state, {
                toasts: [...state.toasts.slice(0, indexToast), ...state.toasts.slice(indexToast + 1)]
            })
        default:
            return state;
    }
};