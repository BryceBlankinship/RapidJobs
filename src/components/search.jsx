import { Component } from 'react';
import './search.css';
import './auth.css';

export default class Search extends Component {
    constructor(props){
        super(props);
        this.state = {
            searchField: ''
        };
    }

    render(){
        return (
            <div className="search-container">
                <div className="searchbox">
                    <div className="inputContainer">
                        <input type='text' className='input' id='search' placeholder='a' onChange={event => {
                            this.setState({searchField: event.currentTarget.value}, () => {
                                // filter results from card list
                                console.log(this.state.searchField);
                            });
                        }}></input>
                        <label className='label'>{this.props.placeholder}</label>
                    </div>
                </div>
            </div>
        );
    }
}