import { SET_USER } from "../actions/UserAction";

const initialState = {
    user: "Аноним"
}

export function UserReducer(state = initialState, action){
    switch(action.type){
        case SET_USER:
            return { ...state, user:action.playload } 
        default:
            return state;
         
    }
}