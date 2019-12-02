import React,{useState, useEffect } from 'react';
import axios from 'axios';

const Post =()=>{
    const [post, setPost] =  useState([]);

    const getPost = async()=>{
        const res = await axios(`http://localhost:5000/posts/${post._id}`);
        console.log('res=>',res.data)
        setPost(res.data);
    };
    
    useEffect(()=>{
        getPost();
    },[]);

    return(
        <div>
            {post.title}
        </div>
    )
}

export default Post;