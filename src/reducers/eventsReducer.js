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
        loading: false
    },
    action
) {
    console.log(action);
switch (action.type) {
    case 'LOADING_EVENTS':
        return {
            ...state, 
            loading: true,
        }

    case 'SET_EVENTS':
        return {
            ...action.events, 
            loading: false,
        }

    case 'ADD_EVENT':
        return {
            ...action.user, 
            loading: false,
        }

    case 'UPDATE_EVENT':
        return {
            ...state, 
            name: action.user.name,
            email: action.user.email,
            loading: false,
        }

    default:
        return state;
}
}