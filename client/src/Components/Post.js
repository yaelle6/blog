import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Post = ({ match }) => {
    const [post, setPost] = useState([])
    
    useEffect(()=> {
        axios.get('http://localhost:1234/posts/'+ match.params.id)
            .then((response) => { 
                if(response.status === 200) {
                    setPost(response.data)
                }
            })
            .catch( err => console.error(err))
    }, [])

    const { title, text, author } = post

    return (
        <div>
            <h1>{ title }</h1>
            <h3>{ author }</h3>
            <p>{ text }</p>
        </div>
    )
}






export default Post 