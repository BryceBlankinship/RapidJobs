import { React, Component } from 'react';
import ReacliOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Auth from './auth.jsx';
import Jobs from './jobs.jsx';
import Hire from './hire.jsx';
import Balance from './balance.jsx';
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


function getJobListings(amount) {
    // Will get job listings from MongoDB database
    // Will return a specific amount at first but eventually
    // will constantly return values as the user scrolls until it runs out (hopefully never)
    return (
        <div>
            <div className='job-container'>
                <h1>Some Sample Data</h1>
            </div>
            <div className='job-container'>
                <h1>More Sample Data</h1>
            </div>
            <div className='job-container'>
                <h1>Even More!</h1>
            </div>
            <div className='job-container'>
                <h1>Ok this is enough</h1>
            </div>
            <div className='job-container'>
                <h1>Pls stop</h1>
            </div>
            <div className='job-container'>
                <h1>The end :)</h1>
            </div>
        </div>
    );
}

class JobPostings extends Component {
    render() {
        return (
            <div className='body'>
                <div className='job-overview'>
                    <h1>Job Listings</h1>
                </div>

                <div className='jobs-list'>
                    {getJobListings()}
                </div>
            </div>
        );
    }
}

ReacliOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={[<Navbar/>, <JobPostings />]}/>
            <Route path="/signup" element={[<Navbar/>, <Auth method="signup"/>]}/>
            <Route path="/signin" element={[<Navbar/>, <Auth method="signin"/>]}/> 
            <Route path="/jobs" element={[<Navbar/>, <Jobs/>]}/> 
            <Route path="/hire" element={[<Navbar/>, <Hire/>]}/> 
            <Route path="/balance" element={[<Navbar/>, <Balance/>]}/> 
            
        </Routes>
    </BrowserRouter>
    ,
    document.getElementById("root")
);