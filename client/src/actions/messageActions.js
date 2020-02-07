import {
    GET_MESSAGES,
    SET_LOADING,
    MESSAGES_ERROR,
    ADD_MESSAGE,
    DELETE_MESSAGE,
    SEARCH_MESSAGES,
} from './types';

// Get messages from the server
export const getMessages = () => async dispatch => {
    try {
        setLoading();

        const res = await fetch('/messages');
        const data = await res.json();

        dispatch({
            type: GET_MESSAGES,
            payload: data
        })
    } catch (err) {
        dispatch({
            type: MESSAGES_ERROR,
            payload: err.response.statusText
        })
    }
};

// Search logs
export const searchMessages = (text) => async dispatch => {
    try {
        setLoading();

        const res = await fetch(`/messages/${text}`);
        const data = await res.json();

        dispatch({
            type: SEARCH_MESSAGES,
            payload: data
        })
    } catch (err) {
        dispatch({
            type: MESSAGES_ERROR,
            payload: err.response.statusText
        })
    }
};


// Add new message
export const addMessage = (message) => async dispatch => {
    try {
        setLoading();

        const res = await fetch('/messages', {
            method: 'POST',
            body: JSON.stringify(message),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await res.json();

        dispatch({
            type: ADD_MESSAGE,
            payload: data
        })
    } catch (err) {
        dispatch({
            type: MESSAGES_ERROR,
            payload: err.response.statusText
        })
    }
};

// Delete message from the server
export const deleteMessage = (_id) => async dispatch => {
    try {
        setLoading();

        await fetch(`/messages/${_id}`, {
            method: 'DELETE'
        });

        dispatch({
            type: DELETE_MESSAGE,
            payload: _id
        })
    } catch (err) {
        dispatch({
            type: MESSAGES_ERROR,
            payload: err.response.statusText
        })
    }
};


// Set loading to true
export const setLoading = () => {
    return {
        type: SET_LOADING
    };
};