import React from 'react';

const NewPost =()=>{
    return(
        <main>
            <div className="container">
                <h1>Create New post</h1>
                    <a className="imugrLink" href="https://imgur.com/upload">Tips: Use <strong>Imgur</strong> <span><i class="fas fa-external-link-alt"></i></span> to create your img Url</a>
                <form className="posts-form" id="createFrom" action="/posts" method="POST">
                    <label for="title"></label>
                        <input type="text"  name="title" placeholder="Title"/>
                    <label ></label>
                        <input type="text"  name="imgUrl" placeholder="imgUrl..."/>
                    <label for="message"></label>
                        <textarea id="desc" name="description" rows="5" placeholder="Description"></textarea>
                    <span id="status"></span>
                    <button type="submit" id="submitButton" name="submit">New Post</button>
                </form>

                <div className="go-back">
                    <a href="/gallery">Go Back</a>
                </div>
            </div>
        </main>
        
    )
}

export default NewPost