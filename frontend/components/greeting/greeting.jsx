import React from 'react';
import { Link } from 'react-router-dom';
// import { openModal } from '../../actions/modal_actions';


const Greeting = ({currentUser, logout, openModal}) => {
    // const header = !currentUser ? (
    //     <div>
    //         <Link to="/login">Log in</Link>
    //         <br></br>
    //         <Link to="/signup">Get Started</Link>
    //     </div>
    // ) : (
    //     <div>
    //         <h3>Hello, {currentUser.username}</h3>
    //         <Link to="/stories/new">Write</Link>
    //         <button onClick={logoutUser}>Sign out</button>
    //     </div>
    // )

   
    return (
        currentUser ? (
            <header>
                <h3>Hello, {currentUser.username}</h3>
                <Link to="/stories/new">Write</Link>
                <button onClick={logout}>Sign out</button>
            </header>
        ) : (
            <header>
                <button onClick={() => openModal('Log in')}>Log in</button>
                <button onClick={() => openModal('Sign Up')}>Get Started</button>
            </header>
        )
    ); 
}

export default Greeting;