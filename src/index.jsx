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
import ThemeContextProvider, { ThemeContext } from './contexts/theme.jsx';
import RandomizeDice from './components/randomizeJobs.jsx';


export default class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = { option: 0 };
        if (!window.sessionStorage.getItem("option")) {
            window.sessionStorage.setItem("option", 0);
        }
    }

    static contextType = ThemeContext;

    setNavbarState(index) {
        this.setState({ option: index });
        window.sessionStorage.setItem("option", index.toString());
    }

    render() {
        const { isLightTheme, light, dark } = this.context;
        const theme = isLightTheme ? light : dark;
        return (
            <div className='center'>
                <ul className='navbar'>
                    <li><Link className={window.sessionStorage.getItem("option") === "0" ? 'active' : ''} to="/" onClick={() => this.setNavbarState(0)}>Dashboard</Link></li>
                    <li><Link className={window.sessionStorage.getItem("option") === "1" ? 'active' : ''} to="/saved" onClick={() => this.setNavbarState(1)}>Saved</Link></li>
                    <li><Link className={window.sessionStorage.getItem("option") === "2" ? 'active' : ''} to="/hire" onClick={() => this.setNavbarState(2)}>Hire</Link></li>
                    <li><Link className={window.sessionStorage.getItem("option") === "3" ? 'active' : ''} to="/wallet" onClick={() => this.setNavbarState(3)}>Wallet</Link></li>
                    <li className='right'><Link className={window.sessionStorage.getItem("option") === "4" ? 'active' : ''} to="/auth" onClick={() => this.setNavbarState(4)}>Sign in</Link></li>
                    <li className='right'><Link className={window.sessionStorage.getItem("option") === "5" ? 'active' : ''} to="/auth" onClick={() => this.setNavbarState(5)}>Sign Up</Link></li>
                    <li className='right'>{<NotificationBell />}</li>
                    <li className='right'>{<DarkLightToggle />}</li>
                </ul>
            </div>
        );

    }
}


//Generate 50 cards for testing
let titles = [];
for (let i = 0; i < 50; i++) {
    titles.push("test" + i);
}

export function JobPostings(props) {


    return (
        <div className='jobs-list'>
            <EditCard />

            {props.list.map((t, i) => {
                return <Card key={i} allowDisable={false} allowBookmark={true} title={t} desc="Just your run-of-the-mill description" />
            })}

            <RandomizeDice />
        </div>
    );

}

export class Container extends Component {
    static contextType = ThemeContext;

    render() {
        const { isLightTheme, light, dark } = this.context;
        const theme = isLightTheme ? light : dark;
        return (
            <div className='main-container' style={{ margin: 0, padding: 0, background: theme.bg }}>{this.props.children}</div>
        );

    }
}

ReactDOM.render(
    <ThemeContextProvider>
        <Container>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={[<Navbar />, <JobPostings list={titles} />, <Footer />]} />
                    <Route path="/auth" element={[<Navbar />, <AuthToggle />, <Footer />]} />
                    <Route path="/saved" element={[<Navbar />, <Jobs />, <Footer />]} />
                    <Route path="/hire" element={[<Navbar />, <HireView />, <Footer />]} />
                    <Route path="/wallet" element={[<Navbar />, <Wallet />, <Footer />]} />
                </Routes>
            </BrowserRouter>
        </Container>
    </ThemeContextProvider>
    ,
    document.getElementById("root")
);