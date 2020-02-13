import { RECEIVE_ALL_STORIES, RECEIVE_STORY, DELETE_STORY } from '../actions/story_actions';

const storiesReducer = (state = {}, action) => {
    Object.freeze(state); 
    let newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_ALL_STORIES: 
            return action.stories;
        case RECEIVE_STORY: 
            newState[action.story.id] = action.story; 
            return newState
        case DELETE_STORY: 
            delete newState[action.storyId]; 
            return newState;
        default: 
            return state; 
    };
};

export default storiesReducer;