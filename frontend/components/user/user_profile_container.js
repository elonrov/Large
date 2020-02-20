import { connect } from 'react-redux'; 

import UserProfile from './user_profile';
// import getAllStories from '../../reducers/selectors';
import { fetchUser } from '../../actions/user_actions';
import { fetchAllStories, removeStory } from '../../actions/story_actions';

const mapStateToProps = (state, ownProps) => {
    // const authorId = state.entities.users[ownProps.match.params.userId]
     
    return {
        stories: Object.values(state.entities.stories) || [],
        // stories: getAllStories(state),
        user: state.entities.users[ownProps.match.params.userId] ? 
            state.entities.users[ownProps.match.params.userId] : {storyids: []}, 
        currentUser: state.entities.users[state.session.id]
    }
    // in selector Object.values(state.entities.stories);
    // for each if the author id matches the userId
}; 

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUser: (userId) => dispatch(fetchUser(userId)), 
        fetchAllStories: (stories) => dispatch(fetchAllStories(stories)), 
        removeStory: (storyId) => dispatch(removeStory(storyId))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);