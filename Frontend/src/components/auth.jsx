import { React, useState } from 'react';
import './auth.css';

export default function AuthToggle() {
    const [auth, setAuth] = useState(false);
    const [loginDetails, setLoginDetails] = useState({
        email: '',
        password: ''
    });
    const [signupDetails, setSignupDetails] = useState({
        name: '',
        email: '',
        password: ''
    });

    if (auth) {
        return (
            <div className="ssobody">
                <div className="signupFrm" id="signin">
                    <form action="" className="form">
                        <h1 className="title">Sign in</h1>

                        <div className="inputContainer">
                            <input type="text" className="input" id="signinemail" placeholder="a" onChange={event => {
                                setLoginDetails({ email: event.currentTarget.value });
                            }}></input>
                            <label className="label">Email</label>
                        </div>

                        <div className="inputContainer">
                            <input type="password" className="input" id="signinpassword" placeholder="a" onChange={event => {
                                setLoginDetails({ password: event.currentTarget.value });
                            }}></input>
                            <label className="label">Password</label>
                        </div>

                        <h3 id="switchtosignin">Don't have an account yet? <a onClick={() => setAuth(!auth)}>Sign up here.</a></h3>
                        <input type="submit" className="submitBtn" id="signinButton" value="Sign in" onClick={event => {
                            event.preventDefault();
                            //send to auth.cjs to validate and create jwt
                            console.log(loginDetails.password);
                        }}></input>
                    </form>
                </div>
            </div>
        );
    } else {
        return (
            <div className='ssobody'>
                <div className="signupFrm" id="signup">
                    <form action="" className="form">
                        <h1 className="title">Sign up</h1>

                        <div className="inputContainer">
                            <input type="text" className="input" id="username" placeholder="a" onChange={event => {
                                setSignupDetails({ name: event.currentTarget.value });
                            }}></input>
                            <label className="label">Full Name</label>
                        </div>

                        <div className="inputContainer">
                            <input type="text" className="input" id="signupemail" placeholder="a" onChange={event => {
                                setSignupDetails({ email: event.currentTarget.value });
                            }}></input>
                            <label className="label">Email</label>
                        </div>

                        <div className="inputContainer">
                            <input type="password" className="input" id="signuppassword" placeholder="a" onChange={event => {
                                setSignupDetails({ password: event.currentTarget.value });
                            }}></input>
                            <label className="label">Password</label>
                        </div>

                        <h3 id="switchtosignin">Already registered? <a onClick={() => setAuth(!auth)}>Sign in here.</a></h3>
                        <input type="submit" className="submitBtn" id="signupButton" value="Sign up" onClick={event => {
                            event.preventDefault();
                            // send to auth.cjs file
                        }}></input>
                    </form>
                </div>
            </div>
        );
    }

}