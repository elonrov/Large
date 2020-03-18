import { connect } from 'react-redux';
import { fetchResponses } from '../../actions/response_actions';

import ResponseIndex from './response_index';

const mapStateToProps = (state, ownProps) => {
  const responses = Object.values(state.entities.responses).filter(response => parseInt(response.story_id) === parseInt(ownProps.storyId));
  return {
    responses: responses,
    currentUser: state.entities.users[state.session.id]
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchResponses: () => dispatch(fetchResponses())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResponseIndex);