import React from 'react'; 
import { connect } from 'react-redux'; 

import StoryShow from './story_show'; 
import { fetchStory } from '../../actions/story_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        story: state.stories[ownProps.match.params.storyId],
        // author: state.stories[ownProps.match.params.storyId.authorId]
    }
}; 

const mapDispatchToProps = (dispatch) => {
    return {
        fetchStory: story => dispatch(fetchStory(story))
    }
}; 

export default connect(mapStateToProps, mapDispatchToProps)(StoryShow);