import React from 'react'; 
import { connect } from 'react-redux'; 

import StoryShow from './story_show'; 
import { fetchStory } from '../../actions/story_actions';

const mapStateToProps = (state, ownProps) => {
    const story = state.entities.stories[ownProps.match.params.storyId] || {};
    const author = state.entities.users[story.author_id] || {};
    return {
        story: story,
        author: author
    }
}; 

const mapDispatchToProps = (dispatch) => {
    return {
        fetchStory: storyId => dispatch(fetchStory(storyId))
    }
}; 

export default connect(mapStateToProps, mapDispatchToProps)(StoryShow);