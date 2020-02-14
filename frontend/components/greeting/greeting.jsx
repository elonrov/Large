import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({currentUser, logout, openModal}) => {

    return (
        currentUser ? (
            <header className="nav-1">
                <Link to="/" className="logo"><h1 className="logo">Large</h1></Link>
                <div className="nav-buttons">
                    <Link className="nav-1-write" to="stories/new">Write</Link>
                    <button className="nav-1-signout" onClick={logout}>Sign out</button>
                    <button className="user-profile-icon">User</button>
                </div>
            </header>
        ) : (
            <header className="nav-1">
                <h1 className="logo">Large</h1>
                <div className="nav-buttons">
                    <button className="nav-1-login" onClick={() => openModal('login')}>Sign in</button>
                    <button className="nav-1-signup" onClick={() => openModal('signup')}>Get Started</button>
                </div>
            </header>
        )
    ); 
}

export default Greeting;