import { RECEIVE_STORY_ERRORS, CLEAR_STORY_ERRORS } from '../actions/story_actions';

const storyErrorsReducer = (state = [], action) => {
    Object.freeze(state); 
    switch(action.type) {
        case RECEIVE_STORY_ERRORS:
            if (action.errors) {
                return action.errors; 
            } else {
                return [];
            }
        case CLEAR_STORY_ERRORS: 
            return [];
        default: 
            return []; 
    }
}; 

export default storyErrorsReducer;
