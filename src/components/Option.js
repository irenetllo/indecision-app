import React from 'react';

const Option = (props) =>( 
 
    <li className="option" key={props.count}>
    <p className="option__text ">{props.count}.{props.opt}</p>
    <button className = "button button--link" 
        onClick = {(e) =>{
            props.handleDeleteOption(props.opt)
        }}
    >Remove</button>
    </li>
        
)

export default Option;