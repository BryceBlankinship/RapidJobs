import { React, Component } from 'react';
import './hire.css';
import Card from './cards.jsx';
import Search from './search.jsx';

/**
 * HireView is going to be a list of suggestions to hire based on previous
 * activity, or for new users will be a place to explore the benefits of hiring
 * from the RapidJobs market, will attempt to display cards in a self-explanatory,
 * inviting way so people can just jump in and start drafting, or publishing jobs.
 * 
 * Will explore integrating with StackOverflow posts so users can just publish a link
 * to their stackoverflow question and it'll turn into a 'pretty' card-job :)
 */


export default class HireView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            titles: []
        }
    }

    createList(){
        for (let i = 0; i < 15; i++) {
            this.state.titles.push('test' + i);
        }
        
    }

    render() {
        return (
            <div className="hireview">
                <h1 className='heading'>How Can We Help?</h1>
                <Search placeholder='Search'></Search>
                <div className="hire-container">
                    <div className="left-column">
                        <Card width="200px" title="test" />
                        <Card width="200px" title="test" />
                        <Card width="200px" title="test" />
                        <Card width="200px" title="test" />
                        <Card width="200px" title="test" />
                    </div>
                    <div className="middle-column">
                        <Card width="200px" title="test" />
                        <Card width="200px" title="test" />
                        <Card width="200px" title="test" />
                        <Card width="200px" title="test" />
                        <Card width="200px" title="test" />
                    </div>
                    <div className="right-column">
                        <Card width="200px" title="test" />
                        <Card width="200px" title="test" />
                        <Card width="200px" title="test" />
                        <Card width="200px" title="test" />
                        <Card width="200px" title="test" />
                    </div>
                </div>
            </div>
        );
    }
}
