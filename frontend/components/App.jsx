import React from "react";
import { Route, Switch } from "react-router-dom";

import GreetingContainer from './greeting/greeting_container';
import SplashContainer from './splash/splash_container';
import Footer from './footer/footer';
import Modal from './modal/modal';
import StoryIndexContainer from './story/story_index_container';
import StoryShowContainer from './story/story_show_container';
import CreateStoryContainer from './story/create_story_container';
import EditStoryContainer from './story/edit_story_container';
import UserProfileContainer from './user/user_profile_container';
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
                <ProtectedRoute exact path="/stories" component={StoryIndexContainer} />
                <ProtectedRoute exact path="/stories/new" component={CreateStoryContainer} />
                <ProtectedRoute exact path="/stories/:storyId/edit" component={EditStoryContainer} />
                <Route path="/stories/:storyId" component={StoryShowContainer} />
                <Route path="/users/:userId" component={UserProfileContainer}/>
            </Switch>
            <footer>
                <Footer /> 
            </footer>
        </div>
    )
};

export default App;
