export default function userReducer(state = {}, action) {
    switch (action.type) {
        case "UPDATE_NAME":
            return {...state, name: action.name}

        case "UPDATE_EMAIL":
            return {...state, email: action.email}

        default:
            return state;
    }
}