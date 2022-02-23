import { React, Component, useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import AuthToggle from './components/auth.jsx';
import Jobs from './components/jobs.jsx';
import HireView from './components/hire.jsx';
import Wallet from './components/wallet.jsx';
import Footer from './components/footer.jsx';
import { default as NotificationBell } from './components/notifications.jsx';
import { default as Card, EditCard } from './components/cards.jsx';
import DarkLightToggle from './components/dark-light.jsx';
import './components/jobs.css';
import './components/navbar.css';


export default class Navbar extends Component {
    constructor(props){
        super(props);
        this.state = { option: 0 };
        if(!window.sessionStorage.getItem("option")) {
            window.sessionStorage.setItem("option", 0);
        }
    }

    setNavbarState(index){
        this.setState({option:index});
        window.sessionStorage.setItem("option", index.toString());
    }

    render(){
        return (
            <div className='center'>
                <ul className='navbar'>
                    <li><Link className={window.sessionStorage.getItem("option") === "0" ? 'active' : ''} to="/" onClick={() => this.setNavbarState(0)}>Dashboard</Link></li>
                    <li><Link className={window.sessionStorage.getItem("option") === "1" ? 'active' : ''} to="/saved" onClick={() => this.setNavbarState(1)}>Saved</Link></li>
                    <li><Link className={window.sessionStorage.getItem("option") === "2" ? 'active' : ''} to="/hire" onClick={() => this.setNavbarState(2)}>Hire</Link></li>
                    <li><Link className={window.sessionStorage.getItem("option") === "3" ? 'active' : ''} to="/wallet" onClick={() => this.setNavbarState(3)}>Wallet</Link></li>
                    <li className='right'><Link className={window.sessionStorage.getItem("option") === "4" ? 'active' : ''} to="/auth" onClick={() => this.setNavbarState(4)}>Sign in</Link></li>
                    <li className='right'><Link className={window.sessionStorage.getItem("option") === "5" ? 'active' : ''} to="/auth" onClick={() => this.setNavbarState(5)}>Sign Up</Link></li>
                    <li className='right'>{<NotificationBell/>}</li>
                    <li className='right'>{<DarkLightToggle/>}</li>
                </ul>
            </div>
        );
    }
}


//Generate 50 cards for testing
let titles = [];
for(let i = 0; i < 50; i++){
    titles.push("test" + i);
}

export function JobPostings(props) {    
    const [showDiceTooltip, setShowDiceTooltip] = useState(false);
    const [diceClicked, setDiceClicked] = useState(false);

    function displayDiceTooltip(){
        if(showDiceTooltip){
            return(
                <div className="dice-tooltip">Randomize Jobs!</div>
            );
        }else{
            return null;
        }
    }

    return (
        <div className='jobs-list'>
            <EditCard />

            {props.list.map((t, i) => {
                return <div key={i}><Card allowDisable={false} allowBookmark={true} title={t} desc="Just your run-of-the-mill description" /></div>
            })}

            {displayDiceTooltip()}
            <div className={diceClicked ? "logo dice spin" : "logo dice"} onMouseEnter={() => {
                setShowDiceTooltip(true);
            }} onMouseLeave={() => {
                setShowDiceTooltip(false);
            }} onClick={() => {
                // animation plays every other click, find alternative to this
                setDiceClicked(!diceClicked);
            }}></div>
        </div>
    );

}


ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={[<Navbar/>, <JobPostings list={titles}/>, <Footer/>]} />
            <Route path="/auth" element={[<Navbar/>,  <AuthToggle/>, <Footer/>]} />
            <Route path="/saved" element={[<Navbar/>, <Jobs />, <Footer/>]} />
            <Route path="/hire" element={[<Navbar/>, <HireView/>, <Footer/>]} />
            <Route path="/wallet" element={[<Navbar/>, <Wallet/>, <Footer/>]} />
        </Routes>
    </BrowserRouter>
    ,
    document.getElementById("root")
);