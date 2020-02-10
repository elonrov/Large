import { connect } from 'react-redux';
import SessionForm from './session_form';
import { loginUser } from '../../actions/session_actions';

const mapStateToProps = (state) => ({
    errors: Object.values(state.errors),
    formType: "login"
});

const mapDispatchToProps = (dispatch) => ({
    processForm: (user) => dispatch(loginUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);