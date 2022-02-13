import { React, useState, Component } from 'react';
import './cards.css';

export default class Card extends Component {
    constructor(props){
        super(props);
        this.state = { bookmarked: false };
    }

    render(){
    if (this.props.title || this.props.desc !== undefined) {
            return (
                <div className='card-container'>
                    <div className='card'>
                        <h1 className='card-title'>
                            {this.props.title}
                        </h1>
                        <p className='card-desc'>
                            {this.props.desc}
                        </p>
                        <button className={this.state.bookmarked ? 'submit bookmarkactive' : 'submit bookmark'}  onClick={event => {
                            this.setState({ bookmarked: !this.state.bookmarked }, () => {
                                console.log("Bookmark status: " + this.state.bookmarked);
                            });
                        }}></button>
                    </div>
                </div>
            );
        } else {
            console.log("Card missing properties");
            return (<div></div>);
        }
    }
}


export class EditCard extends Component {
    constructor(props){
        super(props);
        this.state = { title: '', desc: '', submitActive: false };
    }
    
    render(){
        return (
            <div className='card-container'>
                <div className='editcard'>
                    <div className='card'>
                        <h1 className='card-title'>
                            <input className='titletext' onChange={e => this.setState({title: e.currentTarget.value})} placeholder='Who do you need?'></input>
                        </h1>
                        <p className='card-desc'>
                            <span className='textarea' onInput={e => this.setState({desc: e.currentTarget.innerText})} contentEditable></span>
                        </p>

                        <button className={this.state.submitActive ? 'submit submitactive' : 'submit'} onClick={event => {
                            /*
                                Add job to the database (async)

                                Add new card with information submitted in the list right below
                            */
                            this.setState({submitActive: !this.state.submitActive}, () => {
                                console.log("Card submit status: " + this.state.submitActive, this.state.title, this.state.desc);
                            });
                        }}></button>
                    </div>
                </div>
            </div>
        );
    }
}
