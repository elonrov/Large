
export const getAllStories = ({ stories }) => (
    Object.keys(stories).map(id => stories[id])
); 
