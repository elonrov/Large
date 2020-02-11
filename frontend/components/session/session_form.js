import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        }
        
        // this.handleClose = this.handleClose.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    update(field) {
        return e => this.setState({ [field]: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
        this.props.closeModal();
    }

    renderErrors() {
        if (this.props.errors) {
            return (
                <ul>
                    {this.props.errors.map((error, i) => (
                        <li key={`${i}-error`}>
                            {error}
                        </li>
                    ))}
                </ul>
            );
        } else {
            return "";
        }
    };

    render() {

        const header = (this.props.formType === "login") ? (
                "Welcome back."
            ) : (
                "Join Large."
        );

        const subheader = (this.props.formType === "login") ? (
                "Sign in to get personalized story recommendations, follow authors and topics you love, and interact with stories."
            ) : (
                "Create an account to receive great stories in your inbox, personalize your homepage, and follow authors and topics that you love."
        );

        const buttonName = (this.props.formType === "login") ? (
                "Log in" 
            ) : (
                "Sign Up"
        );

        const otherForm = (this.props.formType === "login") ? (
            <button className="other-form-link" onClick={() => openModal('signup')}>No account? Create One</button>
            ) : (
            <button className="other-form-link" onClick={() => openModal('login')}>Already have an account? Sign in</button>
        );

        return (
            <div className="modal-session-form">
                <form className="modal-form" onSubmit={this.handleSubmit}>
                    <button className="modal-close-button" 
                        onClick={() => this.props.closeModal()}>
                        {String.fromCharCode(10005)}
                    </button>
                    <h1 className="modal-header">{header}</h1>
                    <h2 className="modal-subheader">{subheader}</h2>
                    {this.renderErrors()}
                    <label className="modal-label">Username
                        <br />
                        <input className="modal-input"
                        type="text" 
                        value={this.state.username} 
                        onChange={this.update('username')} />
                    </label >
                    <br /><br />
                    <label className="modal-label">Password
                        <br />
                        <input className="modal-input"
                        type="password" 
                        value={this.state.password} 
                        onChange={this.update('password')} />
                    </label>
                    <br /><br />
                    <button className="submit-button" type="submit" value={this.props.formType}>{buttonName}</button>
                    <br />
                    {otherForm}
                 </form>
            </div>
        )
    }
}

export default SessionForm; 