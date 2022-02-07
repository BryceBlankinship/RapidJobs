import React, { useState } from 'react';
 
function Jobs() {
        const[obj, setObj] = useState({ text: localStorage.getItem('text') });

        return(
            <div>
                <button onClick={() => {
                    if(localStorage.getItem('text') === 'false'){
                        localStorage.setItem('text', 'true');
                    }else{
                        localStorage.setItem('text', 'false');
                    }
                    console.log(localStorage.getItem('text'));
                    setObj({...obj.text,
                        text: localStorage.getItem('text') });
                }} id="sessionBtn">Session Toggler</button>
                <h1>Jobs Page</h1>
                <h2>Is there a session? {obj.text}</h2>
            </div>
        ); 
}

export default Jobs;