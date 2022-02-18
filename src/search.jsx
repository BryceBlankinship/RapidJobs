import { Component } from 'react';
import './search.css';
import './auth.css';

export default class Search extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="search-container">
                <div className="searchbox">
                    <div className="inputContainer">
                        <input type='text' className='input' id='search' placeholder='a' onChange={event => {
                            
                        }}></input>
                        <label className='label'>{this.props.placeholder}</label>
                    </div>
                </div>
            </div>
        );
    }
}