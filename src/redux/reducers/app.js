import { GET_APP } from '../actions/app'

const INITIAL = {

};

export default function AppReducers(state = INITIAL, action) {
    if (action.type === GET_APP) {
        return { ...state }

    }
    return state;
}