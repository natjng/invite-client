export default function usersReducer(
        state = {
            id: '',
            email: '', 
            name: '', 
            events: [],
            hosted_events: [],
            loading: false
        },
        action
    ) {
        console.log(action);
    switch (action.type) {
        case 'LOADING_USER':
            return {
                ...state, 
                loading: true,
            }

        case 'LOGIN_USER':
            return {
                ...action.user, 
                loading: false,
            }

        case 'UPDATE_USER':
            return {
                ...state, 
                name: action.user.name,
                email: action.user.email,
                loading: false,
            }

        // case 'ADD_EVENT':
        //     return {
        //         ...action.user, 
        //         loading: false,
        //     }

        default:
            return state;
    }
}