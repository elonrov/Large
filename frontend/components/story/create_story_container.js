import { connect } from 'react-redux'; 
import { createStory } from '../../actions/story_actions';

import StoryForm from './story_form';

const mapStateToProps = (state) => {
    return {
        story: {title: "", body: ""}, 
        formType: "New Story"
    }
}; 

const mapDispatchToProps = (dispatch) => {
    return {
        action: story => dispatch(createStory(story))
    }
}; 

export default connect(mapStateToProps, mapDispatchToProps)(StoryForm);