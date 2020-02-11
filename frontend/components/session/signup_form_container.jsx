import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signupUser } from '../../actions/session_actions';

const mapStateToProps = (state) => ({
    // errors: Object.values(state.errors),
    formType: "signup",
    currentUser: state.session.null
});

const mapDispatchToProps = (dispatch) => ({
    processForm: (user) => dispatch(signupUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);