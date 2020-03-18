import React from 'react';
import { Link } from 'react-router-dom';

const Splash = ({openModal}) => {

        return (

                <div className="splash">
                <section className="image-section-1">
                    <section className="section-1">
                        <h1 className="splash-header-1">Like Medium, but bigger.</h1>
                        <h2 className="splash-header-2">big stories about big ideas.</h2>           
                    </section>
                

                    <section className="section-2">
                        <h3 className="splash-header-3">Ideas and perspectives you won’t find anywhere else.</h3>
                        <p className="splash-p">
                        Large taps into the brains of the world’s most insightful 
                        writers, thinkers, and storytellers to bring you the smartest 
                        takes on topics that matter. So whatever your interest, you 
                        can always find fresh thinking and unique perspectives.
                        </p>
                        <img className="splash-image-1" src={window.splash1} />

                    </section>
                </section>

                <ul className="splash-list">
                    <li className="splash-list-item"><img src={window.bullet} className="bullet"/>Worldclass publications.</li>
                    <li className="splash-list-item"><img src={window.bullet} className="bullet"/>Undiscovered voices.</li>
                    <li className="splash-list-item"><img src={window.bullet} className="bullet"/>Topics you love.</li>
                </ul>

                <section className="section-3">
                   
                    <img className="splash-image-2" src={window.splash3}/>
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

                <h1 className="splash-header-1">Get smarter about what matters to you.</h1>

                <section className="section-3">

                    {/* <img className="splash-image-2" src={window.splash3} /> */}
                    <h3 className="splash-header-3">We do things differently.</h3>
                    <p className="splash-p-2">
                        Large is not like any other platform on the internet. 
                        Our sole purpose is to help you find compelling ideas, 
                        knowledge, and perspectives. We don’t serve ads—we serve you, 
                        the curious reader who loves to learn new things. Large 
                        is home to thousands of independent voices, and we combine 
                        humans and technology to find the best reading for 
                        you—and filter out the rest.
                    </p>
                </section>
                
                <section className="section-4">                        
                    <button onClick={() => openModal('signup')} className="signup-button">Get started.</button>
                    <button onClick={() => openModal('login')} className="login-button">Already have an account? Sign in.</button>
                </section>
            </div>
        )
};
    
export default Splash;

