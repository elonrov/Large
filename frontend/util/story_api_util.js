
export const fetchStories = () => {
    return $.ajax({
        url: '/api/stories',
        method: 'GET'
    })
}; 

export const fetchStory = (storyId) => {
    return $.ajax({
        url: `/api/stories/${storyId}`, 
        method: 'GET'
    })
};

export const createStory = (story) => {
    return $.ajax({
        url: '/api/stories', 
        method: 'POST', 
        data: { story }
    })
};

export const updateStory = (story) => {
    return $.ajax({
        url: `/api/stories/${story.id}`, 
        method: 'PATCH', 
        data: { story }
    })
}; 
 
export const deleteStory = (storyId) => {
    return $.ajax({
        url: `api/stories/${storyId}`, 
        method: 'DELETE'
    })
}; 

