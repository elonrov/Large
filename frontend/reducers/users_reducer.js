import { RECEIVE_CURRENT_USER } from '../actions/session_actions'; 
import merge from 'lodash/merge';

const UsersReducer = (state = {}, action) => {
    Object.freeze(state); 
    let newState;
    switch(action.type) {
        case RECEIVE_CURRENT_USER: 
            newState = merge({}, oldState, { [action.currentUser.id]: action.currentUser });
            return newState;
        default: 
            return state; 
    }
};

export default UsersReducer; 

