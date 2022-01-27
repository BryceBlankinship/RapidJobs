import { React, Component } from 'react';
import ReactDOM from 'react-dom';
import './auth.css';

class Main extends Component {
    render() {
        return (
            <h1>RapidJobs</h1>
        );
    }
}

function signup() {
    return (
        <div className="signupFrm" id="signup">
            <form action="" className="form">
                <h1 className="title">Sign up</h1>

                <div className="inputContainer">
                    <input type="text" className="input" id="username" placeholder="a"></input>
                    <label className="label">Full Name</label>
                </div>

                <div className="inputContainer">
                    <input type="text" className="input" id="signupemail" placeholder="a"></input>
                    <label className="label">Email</label>
                </div>

                <div className="inputContainer">
                    <input type="password" className="input" id="signuppassword" placeholder="a"></input>
                    <label className="label">Password</label>
                </div>

                <h3 id="switchtosignin">Already registered? <a>Sign in here.</a></h3>
                <input type="submit" className="submitBtn" id="signupButton" value="Sign up"></input>
            </form>
        </div>
    );
}

function signin() {
    return (
        <div className="signupFrm" id="signin">
            <form action="" className="form">
                <h1 className="title">Sign in</h1>

                <div className="inputContainer">
                    <input type="text" className="input" id="signinemail" placeholder="a"></input>
                    <label className="label">Email</label>
                </div>

                <div className="inputContainer">
                    <input type="password" className="input" id="signinpassword" placeholder="a"></input>
                    <label className="label">Password</label>
                </div>

                <h3 id="switchtosignin">Don't have an account yet? <a>Sign up here.</a></h3>
                <input type="submit" className="submitBtn" id="signinButton" value="Sign in"></input>
            </form>
        </div>
    );
}

class Auth extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        if (this.props.signup === "true"){
            return (<div className='ssobody'>{signup()}</div>);
        }else{
            return signin();
        }
    }
}

ReactDOM.render(<Auth signup="true"/>, document.getElementById("root"));