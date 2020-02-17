import { connect } from 'react-redux'; 
import { createStory, clearStoryErrors } from '../../actions/story_actions';

import StoryForm from './story_form';

const mapStateToProps = (state) => {
    return {
        story: {title: "", body: ""}, 
        formType: "New Story",
        errors: state.errors.stories
    }
}; 

const mapDispatchToProps = (dispatch) => {
    return {
        action: story => dispatch(createStory(story)), 
        clearErrors: () => dispatch(clearStoryErrors())
    }
}; 

export default connect(mapStateToProps, mapDispatchToProps)(StoryForm);