import { Component, React, useState } from 'react';
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



export function EditCard() {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');

        return (
            <div className='card-container'>
                <div className='card'>
                    <h1 className='card-title'>
                        <input className='titletext' value={title} onChange={e => setTitle(e.currentTarget.value)} placeholder='Who do you need?'></input>
                    </h1>
                    <p className='card-desc'>
                        <span className='textarea' value={desc} onChange={e => setDesc(e.currentTarget.value)} contentEditable></span>
                    </p>

                    <button className='submit' onClick={event => {
                        /*
                            Add job to the database (async)

                            Add new card with information submitted in the list right below
                        */
                        event.preventDefault();
                        console.log(title);
                        console.log(desc);
                        
                    }}></button>
                </div>
            </div>
        );
}
