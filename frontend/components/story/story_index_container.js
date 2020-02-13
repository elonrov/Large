import { connect } from 'react-redux';

import StoryIndex from './story_index';
import { fetchAllStories } from '../../actions/story_actions';

const mapStateToProps = (state) => {
    return {
        stories: Object.values(state.entities.stories)
    }
}; 

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllStories: (stories) => dispatch(fetchAllStories(stories))
    }
}; 

export default connect(mapStateToProps, mapDispatchToProps)(StoryIndex);