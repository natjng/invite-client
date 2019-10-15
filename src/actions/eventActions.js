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