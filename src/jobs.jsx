import { React, Component } from 'react';
 
class Jobs extends Component {
    constructor(props){
        super(props);
        //this.state = { text: localStorage.getItem('text') }
        this.state = { text: 'default' }
    }

    updateText(){
        if(localStorage.getItem('text') === 'true'){
            localStorage.setItem('text', 'false');
            //this.setState({ text: localStorage.getItem('text') });
            this.state = { text: 'false' }
        }else{
            localStorage.setItem('text', 'true');
            //this.setState({ text: localStorage.getItem('text') });
            this.state = { text: 'true' }
        }
    }

    render(){
        return(
            <div>
                <button onClick={this.updateText()} id="sessionBtn">Press me to create a session!</button>
                <h1>Jobs Page</h1>
                <h2>{this.state.text}</h2>
            </div>
        ); 
    }
}

export default Jobs;