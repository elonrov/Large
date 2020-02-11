import { combineReducers } from 'redux';

import sessionsErrorsReducer from './session_errors_reducer';

const errorsReducer = combineReducers({
    sessions: sessionsErrorsReducer
});

export default errorsReducer;