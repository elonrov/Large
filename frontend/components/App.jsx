import React from "react";
import { Route } from "react-router-dom";

import GreetingContainer from './greeting/greeting_container';
import Footer from './footer/footer';
import Modal from './modal/modal';

const App = () => {
    return (
        <div>
            <Modal />
            <header>
                <GreetingContainer />
                {/* <StoryIndex /> */}
                <Footer />                
            </header>
        </div>
    )
};

export default App;
