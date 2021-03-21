import {SET_SELECTED_USER, SET_USER_SEARCH_RESULT} from '../actions/actionTypes';

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SELECTED_USER:
            return {
                ...state,
                selectedUser: action.selectedUser,
            }
        case SET_USER_SEARCH_RESULT:
            return {
                ...state,
                searchResult: action.searchResult
            }
        default:
            return state;
    }
};

const initialState = {
    selectedUser: null,
    searchResult: null
}
