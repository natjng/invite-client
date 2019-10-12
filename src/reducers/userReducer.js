export default function userReducer(
        state = {},
        action
    ) {
        console.log(action);
    switch (action.type) {
        case "LOGIN_USER":
            return {
                ...state,
                currentUser: action.user
            }

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