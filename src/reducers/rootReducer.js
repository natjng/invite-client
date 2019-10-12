import { combineReducers } from "redux";
import userReducer from './userReducer';

const rootReducer = combineReducers({
    state: userReducer,
    // events: eventsReducer, 
    // hostedEvents: hostedEventsReducer
})

export default rootReducer;