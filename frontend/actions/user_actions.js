import * as UserApiUtil from '../util/user_api_util';

export const RECEIVE_USER_STORIES = "RECEIVE_USER_STORIES"; 

const receiveUserStories = (stories) => {
    return {
        type: RECEIVE_USER_STORIES, 
        stories: stories
    }
}; 

export const fetchUserStories = (userId) => dispatch => {
    return UserApiUtil.fetchUserStories(userId).then((stories) => 
    dispatch(receiveUserStories(stories)), 
    error => (dispatch(receiveStoryErrors(error.responseJSON))));
};