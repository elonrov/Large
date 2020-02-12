import React from 'react-redux';
import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

import SessionForm from './session_form';

const mapStateToProps = (state) => {
    return {
        errors: state.errors.sessions,
        formType: "signup",
        // currentUser: state.session.null
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        processForm: (user) => dispatch(signup(user)),
        closeModal: () => dispatch(closeModal()),
        openModal: (modal) => dispatch(openModal(modal))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);