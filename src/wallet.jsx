import { React, Component, Fragment } from 'react';
import './wallet.css';
import Card from './cards.jsx';

class Wallet extends Component {
    render(){
        return(
            <Card title="Wallet Locked" desc={<Fragment><a href='/signup'>Create an account</a> to use your wallet</Fragment>}/>
        );
    }
}

export default Wallet;