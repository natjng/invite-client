import baseUrl from '../index';

export const getUser = () => {
    return dispatch => {
        dispatch({type: 'LOADING_USER'})
        fetch(baseUrl + '/users')
            .then(response => response.json())
            .then(responseJSON => {
                dispatch({type: 'ADD_CATS', cats: responseJSON.images})
            })
    }
}