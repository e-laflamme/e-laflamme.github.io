import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/Menu.css';
import linkedin_logo from '../assets/linkedin-logo.png';
import github_logo from '../assets/github-logo.png';

function Menu() {


    return (
        <div className={'main-menu'}>
            <div className="logo-container">
                <Link to="/">
                    <p>Emily Coffen</p>
                </Link>
            </div>

            <nav>
                <Link to="/" className="link text">About</Link>
                <Link to="/" className="link text">Skills</Link>
                <Link to="/" className="link text">Portfolio</Link>
                <Link to="/" className="link text">Contact</Link>
                <Link to="https://www.linkedin.com/in/emily-coffen/" className="link">
                    <img src={linkedin_logo} alt="LinkedIn" className="menu-right-logo"/>
                </Link>
                <Link to="https://github.com/e-laflamme" className="link">
                    <img src={github_logo} alt="GitHub" className="menu-right-logo"/>
                </Link>
            </nav>
        </div>
    );
}

export default Menu;