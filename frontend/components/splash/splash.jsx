import React from 'react';
import { Link } from 'react-router-dom';

// const Splash = (props) => {
class Splash extends React.Component {

    render () { 
        return (

            <div className="splash">

                <section className="section-1">
                    <h1 className="splash-header-1">Like Medium, but bigger.</h1>
                    <h2 className="splash-header-2">big stories about big ideas.</h2>
                    {/* <h3 className="splash-header-3">An exercise in pixel-perfect cloning, by Elon Rov.</h3> */}
                    
                    <img style={{ backgroundImage: `url(${window.splash1})` }} className="splash-image" />
                </section>

                <section className="section-2">
                    <h3 className="splash-header-3">Ideas and perspectives you won’t find anywhere else.</h3>
                    <p className="splash-p">
                    Medium taps into the brains of the world’s most insightful 
                    writers, thinkers, and storytellers to bring you the smartest 
                    takes on topics that matter. So whatever your interest, you 
                    can always find fresh thinking and unique perspectives.
                    </p>
                </section>
                
                <section className="section-3">
                    <img style={{ backgroundImage: `url(${window.splash2})` }} className="splash-image" />

                    <p className="splash-p"> 
                    With the power of the network, different ways to engage 
                    with stories, and the ability to follow your favorite topics, 
                    writers, and publications, you’re in control of your reading 
                    experience. So the stories that matter most to you are always 
                    at your fingertips.
                    </p>
                    <h3 className="splash-header-3">A customizable reading experience, 
                    made just for you.</h3>
                </section>
                
                <section className="section-4">
                    <img style={{backgroundImage: `url(${window.splash3})`}} className="splash-image"/>
                    
                    <h3 className="splash-header-2">Log in or sign up above to get started.</h3>
                </section>
            </div>
        )
    };
}
    
export default Splash;