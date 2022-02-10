import { Component } from 'react';
import './footer.css';

export default class Footer extends Component {
    render() {
        return (
            <div className='footer-container'>
                <br></br>
                <hr></hr>
                <p>Developed by <a href="https://www.bryceblankinship.com">Bryce Blankinship</a></p>
                <button className='logo github' onClick={event => {
                    window.open("https://github.com/BryceBlankinship/RapidJobs", '_blank');
                }}></button>
                <button className='logo react' onClick={event => {
                    window.open("https://reactjs.org", '_blank');
                }}></button>
                <button className='logo ionic' onClick={event => {
                    window.open("https://ionic.io/", '_blank');
                }}></button>
                <button className='logo html5' onClick={event => {
                    window.open("https://developer.mozilla.org/en-US/docs/Glossary/HTML5", '_blank');
                }}></button>
                <button className='logo css3' onClick={event => {
                    window.open("https://developer.mozilla.org/en-US/docs/Web/CSS", '_blank');
                }}></button>
            </div>
        );
    }
}