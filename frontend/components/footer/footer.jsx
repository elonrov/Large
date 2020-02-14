import React from 'react';

const Footer = (props) => {
    return (
        <ul className="footer-list">
            {/* <li className="footer-list-header">Created by Elon Rov</li> */}
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