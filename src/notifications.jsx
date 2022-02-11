/**
 * This is gonna be interesting
 */

import { useState } from "react";
import './navbar.css';

export default function NotificationBell(){
    const [active, setActive] = useState(false);
    
    return(
        <a className={active ? 'icon notification' : 'icon notification-active'} onClick={() => {
            setActive(!active)
        }}></a>
    );
}