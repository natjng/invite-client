import {baseUrl} from '../index';

export const getEvents = () => {
    return dispatch => {
        dispatch({type: 'LOADING_EVENTS'})
        fetch(baseUrl + '/events')
            .then(r => r.json())
            .then(json => {
                const events = json.data
                dispatch({type: 'SET_EVENTS', events})
            })
    }
}

export const postEvent = (eventStateObj) => {
    return dispatch => {
        dispatch({type: 'LOADING_EVENTS'})
        const configObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(eventStateObj)
        }
        fetch(baseUrl + '/events', configObj)
            .then(r => r.json())
            .then(json => {
                if (json.error) {
                    console.log(json.error);
                }
                else {
                    dispatch({type: 'ADD_EVENT', event: json.data})
                }
            })
    }
}

export const updateEvent = (eventStateObj) => {
    return dispatch => {
        dispatch({type: 'LOADING_EVENTS'})
        const configObj = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(eventStateObj)
        }
        fetch(baseUrl + '/events', configObj)
            .then(r => r.json())
            .then(json => {
                if (json.error) {
                    console.log(json.error);
                }
                else {
                    dispatch({type: 'UPDATE_EVENT', event: json.data})
                }
            })
    }
}