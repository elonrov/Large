import React from 'react'; 
import { connect } from 'react-redux';

import { requestStory, updateStory } from '../../actions/story_actions'; 
import StoryForm from './story_index';

class EditStoryForm extends React.Component {
    render () {
        return (
            <StoryForm 
                story={this.props.story} 
                formType={this.props.formType} 
                action={this.props.action}/>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        story: state.entities.stories[ownProps.match.params.storyId],
        formType: "Edit Story"
    }
}; 

const mapDispatchToProps = (dispatch) => {
    return {
        action: story => dispatch(updateStory(story))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(EditStoryForm);