import React from 'react';
import style from './style.css';

let data = require('./data.json');
class App extends React.Component{
    render(){
        return(
            <div className={style.root}>
                {data.text}
                <span>test</span>
            </div>
        )
    }
}
export default App