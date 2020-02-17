import { connect } from 'react-redux'; 

import UserProfile from './user_profile';
import { fetchUserStories } from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => {
    const authorId = state.entities.users[ownProps.match.params.userId]
    return {
        stories: state.entities.stories[authorId]
    }
}; 

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUserStories: () => dispatch(fetchUserStories())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);