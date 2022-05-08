import { Component } from 'react';
import { ThemeContext } from '../contexts/theme';
import './navbar.css';

export default class ThemeToggler extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false
        };
    }

    static contextType = ThemeContext;

    render() {
        const { setLightTheme, setDarkTheme, isLightTheme, light, dark } = this.context;
        const theme = isLightTheme ? light : dark;
        return (
            <a className={this.state.active ? 'icon sun' : 'icon moon'} style={{ backgroundColor: theme.text }} onClick={() => {
                this.setState({ active: !this.state.active });
                if(this.state.active){
                    setLightTheme();
                }else{
                    setDarkTheme();
                }
            }}></a>
        );
    }
}