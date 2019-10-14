import {baseUrl} from '../index';

export const getUser = (userLoginStateObj) => {
    return dispatch => {
        dispatch({type: 'LOADING_USER'})
        const configObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userLoginStateObj)
        }
        fetch(baseUrl + '/users', configObj)
            .then(r => r.json())
            .then(json => {
                const data = json.data.attributes
                const user = {email: data.email, name: data.name, events: data.events, hosted_events: data.hosted_events}

                dispatch({type: 'LOGIN_USER', user})
            })
    }
}