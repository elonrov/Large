import React from 'react';

const Footer = (props) => {
    return (
        <ul className="footer-list">
            <p className="footer-list-item">Images courtesy of Ouch.pics</p>
            <li className="connect-icons">
                <a target="_blank" href="http://www.elonrov.com" 
                    className="footer-list-item">
                    Created by Elon Rov
                </a>
                <a target="_blank" href="https://github.com/elonrov">
                    <img className="footer-list-git" src={window.github} />
                </a>
                <a target="_blank" href="https://www.linkedin.com/in/elon-rov-1389648b">
                    <img className="footer-list-linked" src={window.linkedin}/>
                </a>
                <a target="_blank" href="https://angel.co/elon-rov">
                    <img className="footer-list-linked" src={window.angel} />
                </a>
            </li>
        </ul>
    )
}; 

export default Footer;