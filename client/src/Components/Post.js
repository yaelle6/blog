import React from 'react';

export default function Post (props) {
    console.log(props)
    return ( 
        
        <div>
            <a>{props.title}</a>
            <p>{props.author}</p>
            {/* A AMÉLIORER */}
            { (props.image != "null" && props.image != "undefined" && props.image != undefined && props.image != null ) ? <img src={props.image}/> : ''}
        </div>
    )
}