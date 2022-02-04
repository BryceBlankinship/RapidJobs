import { React, Component } from 'react';


function createSessionText(){
    localStorage.setItem('text', 'true');
}

function renderButton(){
    return(
        <button onClick={createSessionText} id="sessionBtn">Press me to create a session!</button>
    );
}

function renderText(){
    if (localStorage.getItem('text') === 'true'){
        return <h2>Hey There! You're session is saved!</h2>
    } else {
        return <h2>No Session found :(</h2>
    }
}

class Jobs extends Component {
    render(){
        return(
            <div>
                {renderButton()}
                {renderText()}
                <h1>Jobs Page</h1>
            </div>
        ); 
    }
}

export default Jobs;