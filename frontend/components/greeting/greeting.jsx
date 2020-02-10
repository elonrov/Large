import React from 'react';
import { Link } from 'react-router-dom';


export default ({currentUser, logoutUser}) => {
    // const header = !currentUser ? (
    //     <div>
    //         <h1>Large</h1>
    //         <Link to="/login">Log in</Link>
    //         <Link to="/signup">Get Started</Link>
    //     </div>
    // ) : (
    //     <div>
    //         <h1>Large</h1>
    //         <h3>Hello, {currentUser.username}</h3>
    //         <Link to="/stories/new">Write</Link>
    //         <button onClick={logoutUser}>Sign out</button>
    //     </div>
    // )

   
    return (
            <header>
                <div>Hello</div>
            </header>
        )
    ; 
}