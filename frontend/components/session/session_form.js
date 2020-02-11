import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        }
        
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    update(field) {
        return e => this.setState({ [field]: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user).then(this.props.closeModal)
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`${i}-error`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {

        // const link = (this.props.formType === "login") ? (
        //     "/signup"
        // ) : (
        //         "/login"
        //     );

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

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h1>{header}</h1>
                    <h2>{subheader}</h2>
                    {this.renderErrors()}
                    <label>Username
                        <input 
                        type="text" 
                        value={this.state.username} 
                        onChange={this.update('username')} />
                    </label>
                    <br /><br />
                    <label>Password
                        <input 
                        type="password" 
                        value={this.state.password} 
                        onChange={this.update('password')} />
                    </label>
                    <br /><br />
                    <button type="submit" value={this.props.formType}>{this.props.formType}</button>
                </form>
                <br />
                <button>{other}</button>
            </div>
        )
    }
}

export default SessionForm; 