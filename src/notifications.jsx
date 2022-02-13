/**
 * This is gonna be interesting
 * 
 * Edit: I was right
 */

import { useState, Component } from "react";
import './navbar.css';

export default class NotificationBell extends Component {
    constructor(props) {
        super(props);
        this.state = { active: false };
    }

    render() {
        return (
            <a className={this.state.active ? 'icon notification-active' : 'icon notification'} onClick={() => {
                this.setState({ active: !this.state.active }, () => {
                    this.showNotifications();
                });
            }}></a>
        );
    }

}
