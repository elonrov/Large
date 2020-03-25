import { connect } from 'react-redux'; 

import UserProfile from './user_profile';
import { fetchUser } from '../../actions/user_actions';
import { fetchAllStories, removeStory } from '../../actions/story_actions';

const mapStateToProps = (state, ownProps) => {
     
    return {
        stories: Object.values(state.entities.stories) || [],
        user: state.entities.users[ownProps.match.params.userId] ? 
            state.entities.users[ownProps.match.params.userId] : {storyids: []}, 
        currentUser: state.entities.users[state.session.id]
    }
}; 

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUser: (userId) => dispatch(fetchUser(userId)), 
        fetchAllStories: (stories) => dispatch(fetchAllStories(stories)), 
        removeStory: (storyId) => dispatch(removeStory(storyId))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);