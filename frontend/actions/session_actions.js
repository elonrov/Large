import { signup, login, logout } from '../util/session_api_util';

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

export const loginUser = (user) => dispatch => {
    login(user).then((user) => dispatch(receiveCurrentUser(user))), 
    error => (dispatch(receiveErrors(error.responseJSON)));
};

export const logoutUser = () => dispatch => {
    logout().then(() => dispatch(logoutCurrentUser()));
};

export const signupUser = (user) => dispatch => {
    signup(user).then((user) => dispatch(receiveCurrentUser(user))), 
    error => dispatch(receiveErrors(error.responseJSON));
};


