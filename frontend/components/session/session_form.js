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
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    render() {

        const link = (this.props.formType === "login") ? (
            "/signup"
        ) : (
                "/login"
            );

        const other = (this.props.formType === "login") ? (
            "New User? Sign up here."
        ) : (
                "Already a member? Log in here."
            );

        const header = (this.props.formType === "login") ? (
            "Log In"
        ) : (
            "Sign Up"
            );

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h1>{header}</h1>
                    {this.renderErrors}
                    <label>Username
                        <input type="text" value={this.state.username} onChange={this.update('username')} />
                    </label>
                    <br /><br />
                    <label>Password
                        <input type="password" value={this.state.password} onChange={this.update('password')} />
                    </label>
                    <br /><br />
                    <button type="submit" value={this.props.formType}>Submit</button>
                </form>
                <br />
                <Link to={link}>{other}</Link>
            </div>
        )
    }
}

export default SessionForm; 