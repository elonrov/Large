import * as StoryAPIUtil from '../util/story_api_util'; 

export const RECEIVE_ALL_STORIES = "RECEIVE_ALL_STORIES"; 
export const RECEIVE_STORY = "RECEIVE_STORY"; 
export const DELETE_STORY = "DELETE_STORY"; 
export const RECEIVE_STORY_ERRORS = "RECEIVE_STORY_ERRORS";
// export const RECEIVE_MY_STORIES = "RECEIVE_MY_STORIES"; 

const receiveAllStories = (stories) => {
    return {
        type: RECEIVE_ALL_STORIES, 
        stories: stories
    }
}; 

const receiveStory = (story) => {
    return {
        type: RECEIVE_STORY, 
        story: story
    }
}; 

const deleteStory = (storyId) => {
    return {
        type: DELETE_STORY, 
        storyId: storyId
    }
}; 

const receiveStoryErrors = (errors) => {
    return {
        type: RECEIVE_STORY_ERRORS, 
        errors: errors
    }
}; 

// const receiveMyStories = (stories) => {
//     return {
//         type: RECEIVE_MY_STORIES, 
//         stories: stories
//     }
// }; 

export const fetchAllStories = () => dispatch => {
    return StoryAPIUtil.fetchStories().then((stories) => 
    dispatch(receiveAllStories(stories)), 
    error => (dispatch(receiveStoryErrors(error.responseJSON))));
};

export const fetchStory = (storyId) => dispatch => {
    return StoryAPIUtil.fetchStory(storyId).then((story) => 
    dispatch(receiveStory(story)), 
    error => (dispatch(receiveStoryErrors(error.responseJSON))));
};

export const createStory = (story) => dispatch => {
    return StoryAPIUtil.createStory(story).then((story) => 
    dispatch(receiveStory(story)), 
    error => (dispatch(receiveStoryErrors(error.responseJSON))));
}; 

export const updateStory = (story) => dispatch => {
    return StoryAPIUtil.updateStory(story).then((story) => 
    dispatch(receiveStory(story)), 
    error => (dispatch(receiveStoryErrors(error.responseJSON))));
}; 

export const removeStory = (storyId) => dispatch => {
    return StoryAPIUtil.deleteStory(storyId).then(() => 
    dispatch(deleteStory(storyId)), 
    error => (dispatch(receiveStoryErrors(error.responseJSON))));
}


// export const fetchMyStories = (userId) => dispatch => {
//     return StoryAPIUtil.fetchMyStories(userId).then((stories) => dispatch(receiveMyStories(stories)));
// };