import { React, Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import AuthToggle from './auth.jsx';
import Jobs from './jobs.jsx';
import Hire from './hire.jsx';
import Wallet from './wallet.jsx';
import Footer from './footer.jsx';
import { default as NotificationBell, NotificationPopup} from './notifications.jsx';
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
                <ul>
                    <li><Link className={this.state.option === 0 ? 'active' : ''} to="/" onClick={() => this.setState({option:0})}>Dashboard</Link></li>
                    <li><Link className={this.state.option === 1 ? 'active' : ''} to="/jobs" onClick={() => this.setState({option:1})}>Jobs</Link></li>
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
            <Route path="/" element={[<Navbar/>, <JobPostings list={titles}/>, <Footer/>]} />
            <Route path="/auth" element={[<Navbar/>,  <AuthToggle/>, <Footer/>]} />
            <Route path="/jobs" element={[<Navbar/>, <Jobs />, <Footer/>]} />
            <Route path="/hire" element={[<Navbar/>, <Hire />, <Footer/>]} />
            <Route path="/wallet" element={[<Navbar/>, <Wallet />, <Footer/>]} />
        </Routes>
    </BrowserRouter>
    ,
    document.getElementById("root")
);