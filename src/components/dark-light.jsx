import { Component } from 'react';
import { ThemeContext } from '../contexts/theme';
import './navbar.css';

export default class DarkLightToggle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false
        };
    }

    static contextType = ThemeContext;

    render() {
        const { setLightMode, setDarkMode } = this.context;
        return (
            <a className={this.state.active ? 'icon sun' : 'icon moon'} onClick={() => {
                this.setState({ active: !this.state.active });
                if(this.state.active){
                    setDarkMode();
                }else{
                    setLightMode();
                }
            }}></a>
        );
    }
}