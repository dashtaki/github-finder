import { SET_SELECTED_USER, SET_USER_SEARCH_RESULT } from './actionTypes';

export const setSelectedUser = (selectedUser) => ({
    type: SET_SELECTED_USER,
    selectedUser,
});
export const setSearchResult = (searchResult) => ({
    type: SET_USER_SEARCH_RESULT,
    searchResult,
});
