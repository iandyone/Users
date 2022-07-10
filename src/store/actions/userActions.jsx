export const FETCH_USER = "FETCH_USER";
export const FETCHING_HAS_DONE = "FETCHING_HAS_DONE";
export const SET_RESPONSE_STATUS = "SET_RESPONSE_STATUS";
export const FETCHING_HAS_STARTED = "FETCHING_HAS_STARTED";
export const FETCH_REPOS = "FETCH_REPOS";
export const START_REPOS_FETCHING = "START_REPOS_FETCHING";
export const REPOS_FETCHING_HAS_DONE = "REPOS_FETCHING_HAS_DONE";

export const fetchUserAction = (payload) => ({ type: FETCH_USER, payload });
export const fetchingHasDoneAction = () => ({ type: FETCHING_HAS_DONE });
export const setResponseStatusAction = (payload) => ({ type: SET_RESPONSE_STATUS, payload });
export const fetchingHasStartedAction = () => ({ type: FETCHING_HAS_STARTED });
export const fetchReposAction = (payload) => ({ type: FETCH_REPOS, payload });
export const startReposFetchingAction = () => ({ type: START_REPOS_FETCHING });
export const reposFetchingHasDoneAction = () => ({ type: REPOS_FETCHING_HAS_DONE });