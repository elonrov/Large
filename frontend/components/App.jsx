import React from "react";
import { Route, Switch } from "react-router-dom";

import GreetingContainer from './greeting/greeting_container';
import SplashContainer from './splash/splash_container';
import Footer from './footer/footer';
import Modal from './modal/modal';
import StoryIndexContainer from './story/story_index_container';

const App = () => {
    return (
        <div>
            <Modal />
            <header>
                <GreetingContainer />
            </header>
            <Switch>
                <Route exact path="/" component={SplashContainer} />
                <Route path="/stories" component={StoryIndexContainer} />
            </Switch>
            <footer>
                <Footer /> 
            </footer>
        </div>
    )
};

export default App;
