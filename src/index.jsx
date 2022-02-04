import { React, Component } from 'react';
import ReacliOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Auth from './auth.jsx';
import Jobs from './jobs.jsx';
import Hire from './hire.jsx';
import Wallet from './wallet.jsx';
import WalletCard from './cards.jsx';
import Card from './cards.jsx';

import './jobs.css';
import './navbar.css';


class Navbar extends Component {
    render() {
        return(
            <div className='center'>
                <ul>
                    <li><a className="active" href="/">Dashboard</a></li>
                    <li><a href="/jobs">Jobs</a></li>
                    <li><a href="/hire">Hire</a></li>
                    <li><a href="/balance">Your Balance</a></li>
                    <li className='right'><a href="/signin">Sign in</a></li>
                    <li className='right'><a href="/signup">Sign up</a></li>
                </ul>
            </div>
        );
        
        

    }
}

export default Navbar;


class JobPostings extends Component {
    render() {
        return (
            <div className='jobs-list'>
                <Card title="Hey There" desc="Not so random description" renderAmount="20"/>
            </div>
        );
    }
}

ReacliOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={[<Navbar highlight="dashboard"/>, <JobPostings/>]}/>
            <Route path="/signup" element={[<Navbar highlight="signup"/>, <Auth method="signup"/>]}/>
            <Route path="/signin" element={[<Navbar/>, <Auth method="signin"/>]}/> 
            <Route path="/jobs" element={[<Navbar/>, <Jobs/>]}/> 
            <Route path="/hire" element={[<Navbar/>, <Hire/>]}/> 
            <Route path="/balance" element={[<Navbar/>, <Card title="Wallet Locked" desc="Create an account to use your wallet"/>]}/> 
        </Routes>
    </BrowserRouter>
    ,
    document.getElementById("root")
);