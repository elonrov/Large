import React from 'react';
import { Link } from 'react-router-dom';

const Splash = ({openModal}) => {

        return (

            <div className="splash" style={{ backgroundImage: `url(${window.splash3})` }} >
                <section style={{ backgroundImage: `url(${window.splash1})` }} className="image-section-1">
                    <section className="section-1">
                        <h1 className="splash-header-1">Like Medium, but bigger.</h1>
                        <h2 className="splash-header-2">big stories about big ideas.</h2>
                        {/* <h3 className="splash-header-3">An exercise in pixel-perfect cloning, by Elon Rov.</h3> */}
                        
                        {/* <img style={{ backgroundImage: `url(${window.splash1})` }} className="splash-image" /> */}
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
                </section>
                
                <section className="section-3">

                    <p className="splash-p-2"> 
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
                    <button onClick={() => openModal('signup')} className="signup-button">Get started.</button>
                    <button onClick={() => openModal('login')} className="login-button">Already have an account? Sign in.</button>
                </section>
            </div>
        )
};
    
export default Splash;

