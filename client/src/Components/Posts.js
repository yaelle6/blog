import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Post from './Post'

export default function Posts () {
    const [posts, setPosts] = useState([])
    useEffect(()=> {
        axios.get('http://localhost:1234/posts')
            .then(response => {
                if (response.status === 200) {
                    setPosts(response.data)
                }
            })
            .catch(err => console.error(err));
    }, [])
    return ( 
        <div>
            {
                posts.map(post => <Post key={post.id} title={post.title} text={post.text} image={post.image_url} author={post.author} />)
            }
        </div>
    )
}

