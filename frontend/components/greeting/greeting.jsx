import React from 'react';

const Greeting = ({currentUser, logout, openModal}) => {

    return (
        currentUser ? (
            <header className="nav-1">
                <h1 className="logo">Large</h1>
                <div className="nav-buttons">
                    {/* <ul className="user-dropdown-anchor"> */}
                    {/* <Link to="/stories/new">Write</Link> */}
                    {/* <Link to={`/users/${user.id}/stories`}>Edit Story</Link> */}
                    <button className="nav-1-signout" onClick={logout}>Sign out</button>
                    <div className="user-profile-icon">User</div>
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