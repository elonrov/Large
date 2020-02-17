import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({currentUser, logout, openModal}) => {

    return (
        currentUser ? (
            <header className="nav-1">
                <Link to="/" className="logo"><h1 className="logo">Large</h1></Link>
                <div className="nav-buttons">
                    {/* <Link className="nav-1-write" to="/stories/new">Write</Link> */}
                    {/* <button className="nav-1-signout" onClick={logout}>Sign out</button> */}
                    <button className="user-profile-icon">{currentUser.username.split("")[0]}</button>
                    {/* <div className="arrow-up"></div> */}
                    <ul className="user-menu">
                        <li className="nav-1-username no-highlight">@{currentUser.username}</li>
                        <Link to="/stories/new"><li className="nav-1-write">New Story</li></Link>
                        <Link to={`/users/${currentUser.id}`}><li className="nav-1-profile">Profile</li></Link>
                        <Link to="/"><li className="no-highlight">Settings</li></Link>
                        <Link to="/"><li className="no-highlight">Help</li></Link>
                        <li className="nav-1-signout" onClick={logout}>Sign out</li>
                    </ul>
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