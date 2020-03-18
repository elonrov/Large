import { connect } from 'react-redux'; 
import ResponseForm from './response_form';
import { createResponse, fetchResponse, updateResponse } from '../../actions/response_actions';
import { withRouter } from 'react-router-dom'; 

const mapStateToProps = (state, props) => {
  return {
    response: null, 
    currentUser: state.entities.users[state.session.id], 
  }
}; 

const mapDispatchToProps = (dispatch) => {
  return {
    createResponse: response => dispatch(createResponse(response))
  }
}; 

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ResponseForm)); 