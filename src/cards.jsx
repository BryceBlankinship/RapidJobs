import { React, useState } from 'react';
import './cards.css';

export default function Card(props) {
    const [bookmarked, setBookmarked] = useState(false);

    if (props.title || props.desc !== undefined) {
            return (
                <div className='card-container'>
                    <div className='card'>
                        <h1 className='card-title'>
                            {props.title}
                        </h1>
                        <p className='card-desc'>
                            {props.desc}
                        </p>

                        <button className={bookmarked ? 'submit bookmarkactive' : 'submit bookmark'}  onClick={event => {
                            setBookmarked(!bookmarked);
                            console.log("Bookmark button pressed");
                        }}></button>
                    </div>
                </div>
            );
        } else {
            console.log("Card missing properties");
            return (<div></div>);
        }

}


export function EditCard() {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [btnActive, setBtnActive] = useState(false);
        return (
            <div className='card-container'>
                <div className='editcard'>
                    <div className='card'>
                        <h1 className='card-title'>
                            <input className='titletext' onChange={e => setTitle(e.currentTarget.value)} placeholder='Who do you need?'></input>
                        </h1>
                        <p className='card-desc'>
                            <span className='textarea' onInput={e => setDesc(e.currentTarget.innerText)} contentEditable></span>
                        </p>

                        <button className={btnActive ? 'submit submitactive' : 'submit'} onClick={event => {
                            /*
                                Add job to the database (async)

                                Add new card with information submitted in the list right below
                            */
                            setBtnActive(!btnActive);
                            console.log("Edit card button pressed", title, desc);
                        }}></button>
                    </div>
                </div>
            </div>
        );
}
