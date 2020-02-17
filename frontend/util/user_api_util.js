
export const fetchUserStories = (userId) => {
    return $.ajax({
        url: `/api/users/${userId}`, 
        method: 'GET'
    })
};