import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../contexts/theme.jsx';
import NotificationBell from './notifications.jsx';
import ThemeToggler from './ThemeToggler';
import './navbar.css';

export default class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = { option: 0 };
        if (!window.sessionStorage.getItem("option")) {
            window.sessionStorage.setItem("option", 0);
        }
    }

    static contextType = ThemeContext;

    setNavbarState(index) {
        this.setState({ option: index });
        window.sessionStorage.setItem("option", index.toString());
    }

    render() {
        const { isLightTheme, light, dark } = this.context;
        const theme = isLightTheme ? light : dark;
        return (
            <div className='center'>
                <ul className='navbar' style={{ backgroundColor: theme.navbg, color: theme.text }}>
                    <li><Link className={window.sessionStorage.getItem("option") === "0" ? 'active' : ''} style={{ color: theme.navtext }} to="/" onClick={() => this.setNavbarState(0)}>Dashboard</Link></li>
                    <li><Link className={window.sessionStorage.getItem("option") === "1" ? 'active' : ''} style={{ color: theme.navtext }} to="/saved" onClick={() => this.setNavbarState(1)}>Saved</Link></li>
                    <li><Link className={window.sessionStorage.getItem("option") === "2" ? 'active' : ''} style={{ color: theme.navtext }} to="/hire" onClick={() => this.setNavbarState(2)}>Hire</Link></li>
                    <li><Link className={window.sessionStorage.getItem("option") === "3" ? 'active' : ''} style={{ color: theme.navtext }} to="/wallet" onClick={() => this.setNavbarState(3)}>Wallet</Link></li>
                    <li className='right'><a className={window.sessionStorage.getItem("option") === "4" ? 'active' : ''} style={{ color: theme.navtext }} onClick={() => this.setNavbarState(4)}>Sign in</a></li>
                    <li className='right'>{<NotificationBell />}</li>
                    <li className='right'>{<ThemeToggler />}</li>
                </ul>
            </div>
        );

    }
}