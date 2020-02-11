import React from 'react'; 
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LoginFormContainer from '../session/login_form_container'; 
import SignupFormContainer from '../session/signup_form_container';

function Modal ({ modal, closeModal }) {
    if (!modal) {
        return null;
    }; 

    let component; 

    switch(modal) {
        case 'login':
            component = <LoginFormContainer />;
            break;  
        case 'signup':
            component = <SignupFormContainer />;
            break;
        default: 
            return null;
    };

    return (
        <div onClick={closeModal}>
            <div onClick={e => e.stopPropagation()}>{component}</div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        modal: state.ui.modal
    }
}; 

const mapDispathToProps = (dispatch) => {
    return {
        closeModal: () => dispatch(closeModal())
    }
}; 

export default connect(mapStateToProps, mapDispathToProps)(Modal);