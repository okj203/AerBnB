import * as SessionAPIUtil from "../util/session_api_util";

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_ERRORS';

export const receiveCurrentUser = (currentUser) => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
});

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
});

export const receiveSessionErrors = (errors) => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});

export const login = user => dispatch => (SessionAPIUtil.login(user)
    .then(payload => dispatch(receiveCurrentUser(payload))));

export const logout = () => dispatch => (SessionAPIUtil.logout()
    .then(() => dispatch(logoutCurrentUser())));

export const signup = user => dispatch => (SessionAPIUtil.signup(user)
    .then(payload => dispatch(receiveCurrentUser(payload))));
/**
 * 
 * 
 * 
 * 
    login(user) (thunk action creator)
    logout() (thunk action creator)
    signup(user) (thunk action creator)
    receiveCurrentUser(currentUser) (regular action creator)
    logoutCurrentUser() (regular action creator)
    receiveErrors(errors) (regular action creator)
 * 
 * 
 * 
 */