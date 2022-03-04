import React, { createContext, Component } from 'react';

export const ThemeContext = createContext();

/*
    Dark mode colors
    Background: #353D4B
    Text: #CECECE
    Highlight: #519AAC (undecided)
*/

export default class ThemeContextProvider extends Component {
    state = {
        isLightTheme: window.localStorage.getItem('isLightTheme') || true,
        light: { text: '#000000', highlight: '#f3f3f3', bg: '#fff', navtext: '#666', navhighlight: '', navbg: '#f3f3f3', shadow: '0 10px 25px rgba(92, 99, 105, 0.2)' },
        dark: { text: '#CECECE', highlight: '#519AAC', contrastbg: '#23272F', bg: '#353D4B', navtext: '#CECECE', navhighlight: '', navbg: '#353D4B', shadow: '0 10px 25px rgba(206, 206, 206, 0.1)' }
    }

    toggleTheme = () => {
        this.setState({ isLightTheme: !this.state.isLightTheme });
        window.localStorage.setItem('isLightTheme', this.state.isLightTheme);
    }

    setLightTheme = () => {
        this.setState({ isLightTheme: true });
        window.localStorage.setItem('isLightTheme', 'true');
        console.log(window.localStorage.getItem('isLightTheme'));
    }

    setDarkTheme = () => {
        this.setState({ isLightTheme: false });
        window.localStorage.setItem('isLightTheme', 'false');
        console.log(window.localStorage.getItem('isLightTheme'));
    }

    render(){
        return(
            <ThemeContext.Provider value={{...this.state, toggleTheme: this.toggleTheme, setLightTheme: this.setLightTheme, setDarkTheme: this.setDarkTheme }}>
                {this.props.children}
            </ThemeContext.Provider>
        )
    }
}