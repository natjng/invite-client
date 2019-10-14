export default function userReducer(
        state = {
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
        case "LOGIN_USER":
            return action.user

        case "UPDATE_NAME":
            return {
                ...state, 
                currentUser: {
                    ...state.currentUser,
                    name: action.name
                }
            }

        case "UPDATE_EMAIL":
            return {
                ...state, 
                currentUser: {
                    ...state.currentUser,
                    email: action.email
                }
            }

        default:
            return state;
    }
}