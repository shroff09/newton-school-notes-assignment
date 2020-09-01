import React from 'react';
import  './style.css';
import newtonpic from './newtonpic.svg';


function Head(props) {
    return (
        <div className='first'>
            <img src={newtonpic} alt='logo'/>
    <h2 className='newton' >{props.first}</h2>
    <h2 className='School'>{props.second}</h2>

        </div>
    );
}

export default Head; 