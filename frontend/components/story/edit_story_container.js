import React from 'react'; 
import { connect } from 'react-redux';

import { requestStory, fetchStory, updateStory, clearStoryErrors } from '../../actions/story_actions'; 
// import { fetchStory } from '../../actions/story_actions';
import StoryForm from './story_form';

class EditStoryForm extends React.Component {
    
    componentDidMount() {
        this.props.fetchStory(this.props.storyId);
        window.scrollTo(0, 0);
    };


    render () {
        return (
            <StoryForm 
                story={this.props.story} 
                formType={this.props.formType} 
                action={this.props.action}
                errors={this.props.errors}
                fetchStory={this.props.fetchStory}
                clearErrors={this.props.clearErrors}
                currentUser={this.props.currentUser}/>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        story: state.entities.stories[ownProps.match.params.storyId] || {},
        formType: "Edit Story",
        storyId: ownProps.match.params.storyId || "", 
        errors: state.errors.stories, 
        currentUser: state.entities.users[state.session.id]
    }
}; 

const mapDispatchToProps = (dispatch) => {
    return {
        action: (story) => dispatch(updateStory(story)),
        fetchStory: (storyId) => dispatch(fetchStory(storyId)),
        clearErrors: () => dispatch(clearStoryErrors())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(EditStoryForm);