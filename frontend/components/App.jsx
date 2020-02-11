import React from "react";
import { Route } from "react-router-dom";

import GreetingContainer from './greeting/greeting_container';
import Modal from './modal/modal';

const App = () => {
    return (
        <div>
            <Modal />
            <header>
                {/* <h1>Large</h1> */}
                <GreetingContainer />
            </header>
        </div>
    )
};

export default App;
