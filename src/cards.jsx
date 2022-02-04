import { Component, React } from 'react';
import './cards.css';

class Card extends Component {
    constructor(props) {
        super(props);
    }

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