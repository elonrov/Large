import { RECEIVE_STORY_ERRORS } from '../actions/story_actions';

const storyErrorsReducer = (state = [], action) => {
    Object.freeze(state); 
    switch(action.type) {
        case RECEIVE_STORY_ERRORS:
            if (action.errors) {
                return action.errors; 
            } else {
                return [];
            }
        default: 
            return []; 
    }
}; 

export default storyErrorsReducer;
