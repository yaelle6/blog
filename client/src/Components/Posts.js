import React, { useState, useEffect } from 'react';
import axios from 'axios'
import PostCard from './PostCard'

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
                posts.map(post =><PostCard key={post.id} post={post} />)
            }
        </div>
    )
}

