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
        isLightTheme: true,
        light: { text: '#000000', highlight: '#f3f3f3', bg: '#fff' },
        dark: { text: '#CECECE', highlight: '#519AAC', bg: '#353D4B' }
    }

    toggleTheme = () => {
        this.setState({ isLightTheme: !this.state.isLightTheme });
    }

    setLightTheme = () => {
        this.setState({ isLightTheme: true });
        console.log("light mode active");
    }

    setDarkTheme = () => {
        this.setState({ isLightTheme: false });
        console.log("dark mode active");
    }

    render(){
        return(
            <ThemeContext.Provider value={{...this.state, toggleTheme: this.toggleTheme, setLightTheme: this.setLightTheme, setDarkTheme: this.setDarkTheme }}>
                {this.props.children}
            </ThemeContext.Provider>
        )
    }
}