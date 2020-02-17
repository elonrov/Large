import { connect } from 'react-redux'; 

import UserProfile from './user_profile';
import { fetchMyStories } from '../../actions/story_actions';

const mapStateToProps = (state) => {
    return {
        stories: Object.values(state.entities.)
    }
}; 

const mapDispatchToProps = (dispatch) => {
    return {
        fetchMyStories: 
    }
};