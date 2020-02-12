import React from 'react-redux';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

import SessionForm from './session_form';

const mapStateToProps = (state) => {
    return {
        errors: state.errors.session,
        formType: "login"
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        processForm: (user) => dispatch(login(user)),
        closeModal: () => dispatch(closeModal()), 
        openModal: (modal) => dispatch(openModal(modal)),
        demoLogin: () => dispatch(login({username: "demouser", password: "demopw"}))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);