import { SET_YEAR } from "../actions/PageAction";

const initialState = {
    photos:[],
    year:2017
}

export function PageReducer(state = initialState, action){
    switch (action.type){
        case SET_YEAR:
            return { ...state, year: action.playload}
        default:
            return state;
    }
}