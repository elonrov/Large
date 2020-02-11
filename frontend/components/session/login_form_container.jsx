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
        processForm: (user) => dispatch(loginUser(user)),
        closeModal: () => dispatch(closeModal())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);