import React from 'react';

const Footer = (props) => {
    return (
        <ul className="footer-list">
            <p className="footer-list-item">Images courtesy of Ouch.pics</p>
            <li className="connect-icons">
                <a href="https://elonrov.com" 
                    className="footer-list-item">
                    Created by Elon Rov
                </a>
                <a href="https://github.com/elonrov">
                    <img className="footer-list-git" src={window.github} />
                </a>
                <a href="https://www.linkedin.com/in/elon-rov-1389648b">
                    <img className="footer-list-linked" src={window.linkedin}/>
                </a>
            </li>
        </ul>
    )
}; 

export default Footer;