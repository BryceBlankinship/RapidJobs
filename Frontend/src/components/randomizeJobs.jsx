import React, { useState, useContext } from 'react';
import { ThemeContext } from '../contexts/theme';
import { animated, useSpring } from 'react-spring';

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
                setDiceClicked(!diceClicked);
                /*  fetch new list of jobs
                    ideally use an algorithm to suggest jobs based on what the user DISLIKED
                    because if the user is randomizing, they are probably trying to get an all
                    new experience.

                    Ideas for suggesting the opposite of what the user disliked:
                    1. Time spent on the page (find a way to measure this)
                    2. The tags on the jobs they bookmarked
                    3. 
                */
            }}></div>
        </>
    );

}
