import { combineReducers } from "redux";
import { UserReducer } from './user';
import { PageReducer } from './page';

export const rootReducer = combineReducers({
    user:UserReducer,
    page:PageReducer
});