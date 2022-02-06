import { Component, React, useRef } from 'react';
import './cards.css';

class Card extends Component {
    render() {
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
                    </div>
                </div>
            );
        } else {
            console.log("Card missing properties");
            return (
                <div></div>
            );
        }

    }

}

export default Card;



export class EditCard extends Component {
    render() {
        return (
            <div className='card-container'>
                <div className='card'>
                    <h1 className='card-title'>
                        <input className='titletext' placeholder='Who do you need?'></input>
                    </h1>
                    <p className='card-desc'>
                        <span className='textarea' contentEditable></span>
                    </p>

                    <button className='submit' onClick={event => {
                        /*
                            Add job to the database (async)

                            Add new card with information submitted in the list right below
                        */

                        
                    }}></button>
                </div>
            </div>
        );
    }

}
