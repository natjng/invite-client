import { combineReducers } from "redux";
import userReducer from './userReducer';

const rootReducer = combineReducers({
    currentUser: userReducer,
    // events: eventsReducer, 
})

export default rootReducer;