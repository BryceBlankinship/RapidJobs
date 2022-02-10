import { React, Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Auth from './auth.jsx';
import Jobs from './jobs.jsx';
import Hire from './hire.jsx';
import Wallet from './wallet.jsx';
import Footer from './footer.jsx';
import { default as Card, EditCard } from './cards.jsx';

import './jobs.css';
import './navbar.css';


class Navbar extends Component {
    render() {
        return (
            <div className='center'>
                <ul>
                    <li><a className="active" href="/">Dashboard</a></li>
                    <li><a href="/jobs">Jobs</a></li>
                    <li><a href="/hire">Hire</a></li>
                    <li><a href="/wallet">Wallet</a></li>
                    <li className='right'><a href="/signin">Sign in</a></li>
                    <li className='right'><a href="/signup">Sign up</a></li>
                </ul>
            </div>
        );
    }
}

export default Navbar;

let titles = ["test", "test2", "test3", "test4", "test5"];

export function JobPostings(props) {

    return (
        <div className='jobs-list'>
            <EditCard />

            {props.list.map((t, i) => {
                return <div key={i}><Card title={t} desc="" /></div>
            })}
        </div>
    );

}


ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={[<Navbar highlight="dashboard" />, <JobPostings list={titles}/>, <Footer/>]} />
            <Route path="/auth" element={[<Navbar />, <Auth method="signin" />, <Footer/>]} />
            <Route path="/jobs" element={[<Navbar />, <Jobs />, <Footer/>]} />
            <Route path="/hire" element={[<Navbar />, <Hire />, <Footer/>]} />
            <Route path="/wallet" element={[<Navbar />, <Wallet />, <Footer/>]} />
        </Routes>
    </BrowserRouter>
    ,
    document.getElementById("root")
);