import { RECEIVE_CURRENT_USER } from '../actions/session_actions'; 
import { RECEIVE_STORY } from '../actions/story_actions';
import { RECEIVE_USER } from '../actions/user_actions';

import merge from 'lodash/merge';

const usersReducer = (state = {}, action) => {
    Object.freeze(state); 
    let newState;
    switch(action.type) {
        case RECEIVE_CURRENT_USER: 
            newState = merge({}, state, { [action.currentUser.id]: action.currentUser });
            return newState;
        case RECEIVE_STORY: 
            newState = merge({}, state, { [action.author.id]: action.author });
            return newState;
        case RECEIVE_USER: 
            newState = merge({}, state, { [action.user.id]: action.user})
            return newState;
        default: 
            return state; 
    }
};

export default usersReducer; 

