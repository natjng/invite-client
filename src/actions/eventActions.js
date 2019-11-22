import {baseUrl} from '../index';

export const getEvents = () => {
    console.log('c, 2');
    
    return dispatch => {
        dispatch({type: 'LOADING_EVENTS'})
        fetch(baseUrl + '/events')
            .then(r => r.json())
            .then(json => {
                console.log('d, 4');
                
                const events = json.data
                dispatch({type: 'SET_EVENTS', events})
            })
    }
    // console.log('e, does not execute');
}

export const postEvent = (eventStateObj) => {
    return dispatch => {
        dispatch({type: 'LOADING_EVENTS'})
        const configObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
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
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify(eventStateObj)
        }
        fetch(baseUrl + `/events/${eventStateObj.id}`, configObj)
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

export const rsvpEvent = (eventUserObj) => {
    return dispatch => {
        const configObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify(eventUserObj)
        }
        fetch(baseUrl + '/event_users', configObj)
            .then(r => r.json())
            .then(eventObj => {
                if (eventObj.error) {
                    console.log(eventObj.error);
                }
                else {
                    dispatch({type: 'UPDATE_EVENT', event: eventObj.data})
                }
            })
    }
}

export const removeRsvpEvent = (eventUserObj) => {
    return dispatch => {
        const configObj = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify(eventUserObj)
        }
        fetch(baseUrl + `/event_users/${eventUserObj.id}`, configObj)
            .then(r => r.json())
            .then(eventObj => {
                if (eventObj.error) {
                    console.log(eventObj.error);
                }
                else {
                    dispatch({type: 'UPDATE_EVENT', event: eventObj.data})
                }
            })
    }
}