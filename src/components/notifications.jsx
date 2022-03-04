import { Component } from "react";
import { ThemeContext } from "../contexts/theme";
import './navbar.css';

export default class NotificationBell extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
            jobCount: 8,
            messageCount: 11,
            moneyCount: 5
        };
    }

    static contextType = ThemeContext;

    showBell(){
        const { isLightTheme, light, dark } = this.context;
        const theme = isLightTheme ? light : dark;
        return (
            <a className={this.state.active ? 'icon notification-bell-active' : 'icon notification-bell'} style={{ backgroundColor: theme.text }} onClick={() => {
                this.setState({ active: !this.state.active }, () => {
                    console.log(this.state.active);
                });
            }}></a>
        );
    }


    showJobs(){

    }

    showMessages(){

    }

    showWallet(){
        if(this.state.moneyCount > 0){
            return(
              <>${this.state.moneyCount} was added to your wallet.</>
            );
        }else{
            return null;
        }
    }

    showNotifications(){
        /**
         * The plan for notifications is to group them by type,
         * and aggregate the quantity of each
         * 
         * Examples: 8 new jobs, 11 new messages, $237 has been received from _.
         */

         const { isLightTheme, light, dark } = this.context;
         const theme = isLightTheme ? light : dark;
        return(
            <div className="notification-container" style={{ backgroundColor: theme.bg }}>
                <div className="notification-title">Notifications</div>
                <hr></hr>
                <div className="notification-content">
                    <button className="notification" onClick={() => {
                        console.log("notification 1 clicked");
                    }}>{this.state.jobCount} New Jobs</button>
                    <button className="notification">{this.state.messageCount} New Messages</button>
                    <button className="notification" onClick={() => {
                        window.location = "/wallet";
                    }}>{this.showWallet()}</button>
                </div>
            </div>
        );
    }

    render() {
        if(this.state.active){
            return(
            <>
                {this.showBell()}
                {this.showNotifications()}
            </>
            );
        }else{
            return(this.showBell());
        }
    }
}
