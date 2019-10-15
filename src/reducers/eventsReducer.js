export default function eventsReducer(
    state = {
        // id: '',
        // name: '', 
        // date: '',
        // start_time: '',
        // end_time: '',
        // location: '',
        // description: '',
        // details: '',
        // host_id: '',
        all: [],
        loading: false
    },
    action
) {
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
        return {
            ...state, 
            all: [...state.all, action.event],
            loading: false,
        }

    default:
        return state;
}
}