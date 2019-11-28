import React,{useState,useEffect} from 'react';
import axios from 'axios';

const Gallery =()=>{
    const [posts,setPost] = useState([]);
    const getAllPosts = async ()=>{
        const res = await axios('http://localhost:5000/posts');
        setPost(res.data);
    };
  
    useEffect(()=>{
        getAllPosts();
    },[]);

    const allPosts = posts.map( post => {
        return <article key={post._id} className="entry-items">
                <div className="post-thumb" style={{backgroundImage:`url(${post.imgUrl})`}}>
                    <a href='/'>
                        <h3 className="item-name">{post.title}</h3>
                    <div className="item-author">
                        <p>{post.author.username}</p>
                    </div>
                    </a>
                </div>
                </article>
    })
    return(
    <main>
       <div className="home">
            <div className="container">
                <div className="entry-header">
                    <h1>Hello World</h1>
                    <p>About Life, Images and Code</p>
                    <button id="createPost"><a href="/posts/new">Create New Post</a></button>
                </div>
                <div className='entry-lists'>
                    {allPosts}
                </div>
            </div>

       </div>
    </main>
    )
}

export default Gallery;