export default function eventsReducer(
    state = {
        all: [],
        loading: false
    },
    action
) {
    let index;
    switch (action.type) {
        case 'LOADING_EVENTS':
            return {
                ...state, 
                loading: true,
            }

        case 'SET_EVENTS':
            return {
                ...state,
                all: action.events, 
                loading: false,
            }

        case 'ADD_EVENT':
            return {
                ...state,
                all: [...state.all, action.event], 
                loading: false,
            }

        case 'UPDATE_EVENT':
            index = state.all.findIndex(event => event.id === action.event.id)
            return {
                ...state, 
                all: [
                    ...state.all.slice(0, index),
                    action.event,
                    ...state.all.slice(index + 1)
                ],
                loading: false,
            }

        default:
            return state;
    }
}