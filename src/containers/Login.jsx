import React from 'react';
import { Link } from 'react-router-dom';

// Css 
import '../assets/styles/components/Login.scss';

// Icons 
import google from '../assets/icons/google-icon.png';
import twitter from '../assets/icons/twitter-icon.png';

const Login = () => (
        <section className="login">
        <section className="login__container">
        <h2>Login</h2>
        <form className="login__container--form">
            <input className="input" type="text" placeholder="Email" />
            <input className="input" type="password" placeholder="Password" />
            <button className="button">Login</button>
            <div className="login__container--remember-me">
            <label>
                <input type="checkbox" id="cbox1" value="first_checkbox" /> Remember Me 
            </label>
            <br/>
            <a href="/">Forgot password?</a>
            </div>
        </form>
        <section className="login__container--social-media">
            <div><img src={ google } /> Login with Google</div>
            <div><img src={ twitter } /> Login with Twitter</div>
        </section>
            <p className="login__container--register">
                You don't have any account 
                <br/>
                <Link to="/register">
                    Sign up
                </Link>
            </p>
        </section>
    </section>
)

export default Login;