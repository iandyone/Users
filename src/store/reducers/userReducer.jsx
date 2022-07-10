import { FETCHING_HAS_STARTED, FETCHING_HAS_DONE, FETCH_USER, SET_RESPONSE_STATUS, FETCH_REPOS, START_REPOS_FETCHING, REPOS_FETCHING_HAS_DONE } from "../actions/userActions";

const initialState = {
    user: [],
    repositories: [],
    status: 0,
    isFetching: false,
    isReposFetching: false,
};

export function userReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_USER:
            return { ...state, user: action.payload };
        case FETCH_REPOS:
            return { ...state, repositories: action.payload };
        case SET_RESPONSE_STATUS:
            return { ...state, status: action.payload.status };
        case FETCHING_HAS_STARTED:
            return { ...state, isFetching: true };
        case FETCHING_HAS_DONE:
            return { ...state, isFetching: false };
        case START_REPOS_FETCHING:
            return { ...state, isReposFetching: true };
        case REPOS_FETCHING_HAS_DONE:
            return { ...state, isReposFetching: false };
        default:
            return state;
    }
}