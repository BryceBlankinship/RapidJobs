import React, { createContext, Component } from 'react';

export const Theme = createContext();

/*
    Dark mode colors
    Background: #353D4B
    Text: #CECECE
    Highlight: #519AAC (undecided)
*/

export default class ThemeContextProvider extends Component {
    state = {
        isLightTheme: false,
        light: { text: '#000', highlight: '#f3f3f3', bg: '#fff' },
        dark: { text: '#CECECE', highlight: '#519AAC', bg: '#353D4B' }
    }

    toggleTheme = () => {
        this.setState({ isLightTheme: !this.state.isLightTheme });
    }

    setLightMode = () => {
        this.setState({ isLightTheme: true });
        console.log("light mode active");
    }

    setDarkMode = () => {
        this.setState({ isLightTheme: false });
        console.log("dark mode active");
    }

    render(){
        return(
            <Theme.Provider value={{...this.state, toggleTheme: this.toggleTheme }}>
                {this.props.children}
            </Theme.Provider>
        )
    }
}