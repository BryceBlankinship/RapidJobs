import React, { Component } from 'react';
import './buttons.css';

export default class MainButton extends Component {
    state = {
        hovered: false
    }

    render(){
        return(
            <button className='main-button' onMouseEnter={() => {
                this.setState({ hovered: true }, () => {
                    console.log("hovered" + this.state.hovered);
                });
            }} onMouseLeave={() => {
                this.setState({ hovered: false }, () => {
                    console.log("hovered" + this.state.hovered);
                });
            }}>Test</button>
        );
    }
}