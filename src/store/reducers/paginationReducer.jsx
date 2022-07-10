import { SET_CURRENT_PAGE } from "../actions/pagitationActions";

const initialState = {
    startPage: 1,
    currentPage: 1,
    reposPerPage: 8,
};

export function paginationReducer(state = initialState, action) {
    switch (action.type) {
        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.payload };
        default:
            return state;
    }
}