
export const getAllStories = ({ stories }) => (
    Object.keys(stories).map(id => stories[id])
); 

// export const storyResponses = (state, story) => {
//     const arr = story.response_array;
//     if (arr) {
//         return story.response_array.map(responseId => state.entities.responses[responseId]);
//     }
//     return [];
// };


// export const responseAuthor = (state, response) => {
//     return state.entities.users[response.user_id];
// };

