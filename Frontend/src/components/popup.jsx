import React, { Component } from 'react';

export default class Popup extends Component {
    render(){
        return(
            <div className="popup-container">
                <div className="popup-inner-container">
                    <div className="popup-title">
                        {this.props.title}
                    </div>
                    {this.props.children}
                </div>
            </div>
        ); 
    }
}