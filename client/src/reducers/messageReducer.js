import {
    GET_MESSAGES,
    SET_LOADING,
    MESSAGES_ERROR,
    ADD_MESSAGE,
    DELETE_MESSAGE,
    SEARCH_MESSAGES,

} from '../actions/types';

const initialState = {
    messages: null,
    loading: false,
    error: null
}

export default (state = initialState, action) => {

    switch (action.type) {
        case GET_MESSAGES:
            return {
                ...state,
                messages: action.payload,
                    loading: false
            };
        case SEARCH_MESSAGES:
            return {
                ...state,
                messages: action.payload
            };
        case ADD_MESSAGE:
            return {
                ...state,
                messages: [action.payload, ...state.messages],
                    loading: false
            };
        case DELETE_MESSAGE:
            return {
                ...state,
                messages: state.messages.filter(message => message._id !== action.payload),
                    loading: false
            };
        case SET_LOADING:
            return {
                ...state,
                loading: true
            };
        case MESSAGES_ERROR:
            console.error(action.payload);
            return {
                ...state,
                error: action.payload
            }
            default:
                return state;
    }
}