import { React } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './auth.css';
import Auth from './auth.jsx';



ReactDOM.render(
    <BrowserRouter>
        <Auth/>
    </BrowserRouter>,
    document.getElementById("root")
);