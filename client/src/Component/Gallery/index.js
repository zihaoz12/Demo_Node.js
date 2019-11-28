import React,{useState,useEffect} from 'react';
import axios from 'axios';

const Gallery =()=>{
    const [posts,setPost] = useState([]);
    const getAllPosts = async ()=>{
        const res = await axios.get('http://localhost:5000/posts');
        setPost(res.data);
        console.log(res.data);
    };
    // const getAllPosts =()=>{
    //     fetch("http://localhost:5000/posts").then((res)=>{
    //       return res.json();
    //     }).then((res)=>[
    //       setPost(res.data)
    //     ]);
    //     console.log(posts)
    //   };
    useEffect(()=>{
        getAllPosts();
    },[])
    return(
    <main>
       <div className="home">
            <div className="container">
                <div className="entry-header">
                    <h1>Hello World</h1>
                    <p>About Life, Images and Code</p>
                    <button id="createPost"><a href="/">Create New Post</a></button>
                </div>

            </div>

       </div>
    </main>
    )
}

export default Gallery;