import { React, Component, useState } from 'react';
import './auth.css';

export default function AuthToggle() {
    const [auth, setAuth] = useState(false);

    if(!auth){
        return (
            <div className='ssobody'>
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
    
                        <h3 id="switchtosignin">Already registered? <a onClick={() => setAuth(!auth)}>Sign in here.</a></h3>
                        <input type="submit" className="submitBtn" id="signupButton" value="Sign up" onClick={event => {
                            event.preventDefault();
                        }}></input>
                    </form>
                </div>
            </div>
        );
    }else{
        return (
            <div className="ssobody">
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
    
                        <h3 id="switchtosignin">Don't have an account yet? <a onClick={() => setAuth(!auth)}>Sign up here.</a></h3>
                        <input type="submit" className="submitBtn" id="signinButton" value="Sign in" onClick={event => {
                            event.preventDefault();
                        }}></input>
                    </form>
                </div>
            </div>
        );
    }
    
}

