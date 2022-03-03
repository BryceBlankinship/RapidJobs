import React, { useState, useContext } from 'react';
import { ThemeContext } from '../contexts/theme';

export default function RandomizeDice() {
    const [showDiceTooltip, setShowDiceTooltip] = useState(false);
    const [diceClicked, setDiceClicked] = useState(false);
    const themeContext = useContext(ThemeContext);

    const { isLightTheme, light, dark } = themeContext;
    const theme = isLightTheme ? light : dark;

    function displayDiceTooltip() {
        if (showDiceTooltip) {
            return (
                <div className="dice-tooltip" style={{ color: theme.text }}>Randomize Jobs!</div>
            );
        } else {
            return null;
        }
    }


    return (
        <>
            {displayDiceTooltip()}
            <div className={diceClicked ? "logo dice spin" : "logo dice"} style={{ backgroundColor: theme.text }} onMouseEnter={() => {
                setShowDiceTooltip(true);
            }} onMouseLeave={() => {
                setShowDiceTooltip(false);
            }} onClick={() => {
                // animation plays every other click, find alternative to this
                setDiceClicked(!diceClicked);
            }}></div>
        </>
    );

}
