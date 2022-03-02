import React, { Component, useState } from 'react';
import { Theme } from '../contexts/theme';

export default function RandomizeDice() {
    const [showDiceTooltip, setShowDiceTooltip] = useState(false);
    const [diceClicked, setDiceClicked] = useState(false);

    function displayDiceTooltip() {
        return(
            <Theme.Consumer>{(context) => {
                const { isLightMode, light, dark } = context;
                const theme = isLightMode ? light : dark;
                if (showDiceTooltip) {
                    return (
                        <div className="dice-tooltip" style={{ color: theme.text }}>Randomize Jobs!</div>
                    );
                } else {
                    return null;
                }
            }}
            </Theme.Consumer>

        );

    }

    return (
        <Theme.Consumer>{(context) => {
            const { isLightMode, light, dark } = context;
            const theme = isLightMode ? light : dark;
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
        }}
        </Theme.Consumer>

    );



}