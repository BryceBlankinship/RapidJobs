/**
 * This is gonna be interesting
 */

import { useState } from "react";
import './navbar.css';

export default function NotificationBell(){
    const [active, setActive] = useState(false);

    if(active){
        <NotificationPopup show="true"/>
        return(
            <a className={active ? 'icon notification-active' : 'icon notification'} onMouseDown={() => {
                setActive(!active);
            }}></a>
        );
    }else{
        return(
            <a className={active ? 'icon notification-active' : 'icon notification'} onMouseDown={() => {
                setActive(!active);
            }}></a>
        );
    }

}

export function NotificationPopup(props){
    if(props.show === "true"){
        return (<div className="notification-overlay">test</div>);
    }else{
        return null;
    }
}
