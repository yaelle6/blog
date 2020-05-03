import React from 'react';
import ModifyPost from './ModifyPost'

export default function Post (props) {
    return ( 
        <div>
            <h1>{props.title}</h1>
            <h3>{props.author}</h3>
            {/* A AMÉLIORER */}
            { (props.image !== "null" && props.image !== "undefined" && props.image !== undefined && props.image !== null ) ? <img src={props.image} alt={props.image}/> : ''}

            { <ModifyPost/>}
        </div>
    )
}