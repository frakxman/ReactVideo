import React from 'react';
import '../assets/styles/components/Header.scss';

import logo from '../assets/icons/giphy.gif';
import user from '../assets/icons/user-icon.png';


const Header = () => (
    <header className="header">
        <img className="header__img" src={ logo } alt="React Video" />
        <div className="header__menu">
        <div className="header__menu--profile">
            <img src={ user } alt="user icon" />
            <p>Perfil</p>
        </div>
        <ul>
            <li><a href="/">Cuenta</a></li>
            <li><a href="/">Cerrar Sesión</a></li>
        </ul>
        </div>
    </header>
);

export default Header;