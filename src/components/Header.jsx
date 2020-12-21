import React from 'react';
import { Link } from 'react-router-dom'

// Components 
import '../assets/styles/components/Header.scss';

import logo from '../assets/icons/giphy.gif';
import user from '../assets/icons/user-icon.png';


const Header = () => (
    <header className="header">
        <Link to="/">
            <img className="header__img" src={ logo } alt="React Video" />         
        </Link>
        <div className="header__menu">
        <div className="header__menu--profile">
            <img src={ user } alt="user icon" />
            <p>Profile</p>
        </div>
        <ul>
            <li><a href="/">Account</a></li>
            <li>
                <Link to="/login">
                    LogIn
                </Link>
            </li>
        </ul>
        </div>
    </header>
);

export default Header;