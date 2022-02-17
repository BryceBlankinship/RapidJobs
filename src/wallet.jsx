import './wallet.css';
import { Component } from 'react';
import { WalletCard } from './cards.jsx';

export default class Wallet extends Component {
    render() {
        return (
            <div className="background">
                <WalletCard />
            </div>
        );
    }
}