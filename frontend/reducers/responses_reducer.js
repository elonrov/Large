import { RECEIVE_RESPONSES, RECEIVE_RESPONSE, REMOVE_RESPONSE } from '../actions/response_actions';
import { merge } from 'lodash';

const responsesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_RESPONSES: 
      return action.responses; 
    case RECEIVE_RESPONSE: 
      return merge({}, state, {[action.response.id]: action.response}); 
    case REMOVE_RESPONSE: 
      let newState = merge({}, state); 
      delete newState[action.responseId]; 
      return newState;
    default: 
      return state; 
  }
};

export default responsesReducer;