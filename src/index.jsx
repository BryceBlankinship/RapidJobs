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
import ThemeToggler from './components/ThemeToggler.jsx';
import './components/jobs.css';
import './components/navbar.css';
import ThemeContextProvider, { ThemeContext } from './contexts/theme.jsx';
import RandomizeDice from './components/randomizeJobs.jsx';
import Navbar from './components/Navbar.jsx';

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