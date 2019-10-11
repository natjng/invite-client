import { combineReducers } from "redux";
import userReducer from './userReducer';

const rootReducer = combineReducers({
    user: userReducer,
    // events: eventsReducer, 
    // hostedEvents: hostedEventsReducer
})

export default rootReducer;