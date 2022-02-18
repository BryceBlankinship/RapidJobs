import { React, Component, useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import AuthToggle from './auth.jsx';
import Jobs from './jobs.jsx';
import HireView from './hire.jsx';
import Wallet from './wallet.jsx';
import Footer from './footer.jsx';
import { default as NotificationBell } from './notifications.jsx';
import { default as Card, EditCard } from './cards.jsx';
import './jobs.css';
import './navbar.css';


export default class Navbar extends Component {
    constructor(props){
        super(props);
        this.state = { option: 0 };
    }

    render(){
        return (
            <div className='center'>
                <ul className='navbar'>
                    <li><Link className={this.state.option === 0 ? 'active' : ''} to="/" onClick={() => this.setState({option:0})}>Dashboard</Link></li>
                    <li><Link className={this.state.option === 1 ? 'active' : ''} to="/saved" onClick={() => this.setState({option:1})}>Saved</Link></li>
                    <li><Link className={this.state.option === 2 ? 'active' : ''} to="/hire" onClick={() => this.setState({option:2})}>Hire</Link></li>
                    <li><Link className={this.state.option === 3 ? 'active' : ''} to="/wallet" onClick={() => this.setState({option:3})}>Wallet</Link></li>
                    <li className='right'><Link className={this.state.option === 4 ? 'active' : ''} to="/auth" onClick={() => {
                        this.setState({option:4});
                    }}>Sign in</Link></li>
                    <li className='right'><Link className={this.state.option === 5 ? 'active' : ''} to="/auth" onClick={() => this.setState({option:5})}>Sign Up</Link></li>
                    <li className='right'>{<NotificationBell/>}</li>
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