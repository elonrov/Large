import * as SessionAPIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";


const receiveCurrentUser = (currentUser) => {
    return {
        type: RECEIVE_CURRENT_USER,
        currentUser: currentUser
    };
};

const logoutCurrentUser = () => {
    return {
        type: LOGOUT_CURRENT_USER
    };
};


export const receiveErrors = (errors) => {
    return {
        type: RECEIVE_SESSION_ERRORS,
        errors: errors
    };
};

export const login = (user) => dispatch => {
    return SessionAPIUtil.login(user).then((user) => 
    dispatch(receiveCurrentUser(user))), 
    error => { return (dispatch(receiveErrors(error.responseJSON)))};
};

export const logout = () => dispatch => {
    return SessionAPIUtil.logout().then(() => 
    dispatch(logoutCurrentUser()));
};

export const signup = (user) => dispatch => {
    return SessionAPIUtil.signup(user).then((user) => 
    dispatch(receiveCurrentUser(user))), 
    error => { return (dispatch(receiveErrors(error.responseJSON)))};
};


