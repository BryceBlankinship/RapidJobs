import { Component } from 'react';
import './navbar.css';

export default class DarkLightToggle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false
        };
    }

    render() {
        return (
            <a className={this.state.active ? 'icon sun' : 'icon moon'} onClick={() => {
                this.setState({ active: !this.state.active });
                if(this.state.active){
                    /*
                    Dark mode colors
                    Background: #353D4B
                    Text: #CECECE
                    Highlight: #519AAC (undecided)
                    */
                    
                    
                    // repaint everything dark mode :D
                }else{
                    // repaint everything light mode :D
                }
            }}></a>
        );
    }
}