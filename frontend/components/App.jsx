import React from "react";
import { Route, Switch } from "react-router-dom";

import GreetingContainer from './greeting/greeting_container';
import Splash from './splash/splash';
import Footer from './footer/footer';
import Modal from './modal/modal';

const App = () => {
    return (
        <div>
            <Modal />
            <header>
                <GreetingContainer />
                {/* <StoryIndex /> */}               
            </header>
            <Switch>
                <Route exact path="/" component={Splash} />
            </Switch>
            <footer>
                <Footer /> 
            </footer>
        </div>
    )
};

export default App;
