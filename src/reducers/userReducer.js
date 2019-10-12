export default function userReducer(
        state = null,
        action
    ) {
        console.log(action);
    switch (action.type) {
        case "LOGIN_USER":
            return {
                currentUser: action.user
            }

        case "UPDATE_NAME":
            return {...state, name: action.name}

        case "UPDATE_EMAIL":
            return {...state, email: action.email}

        default:
            return state;
    }
}