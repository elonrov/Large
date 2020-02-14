import React from "react";
import { Route, Switch } from "react-router-dom";

import GreetingContainer from './greeting/greeting_container';
import SplashContainer from './splash/splash_container';
import Footer from './footer/footer';
import Modal from './modal/modal';
import StoryIndexContainer from './story/story_index_container';
import StoryShow from './story/story_show';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => {
    return (
        <div>
            <Modal />
            <header>
                <GreetingContainer />
            </header>
            <Switch>
                <AuthRoute exact path="/" component={SplashContainer} />
                <ProtectedRoute path="/stories" component={StoryIndexContainer} />
                <ProtectedRoute path="/stories/:storyId" component={StoryShow} />
            </Switch>
            <footer>
                <Footer /> 
            </footer>
        </div>
    )
};

export default App;
