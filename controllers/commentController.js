const express = require('express');
const router = express.Router({mergeParams:true});
const Post = require('../models/posts');
const Comment = require('../models/comments');

router.get('/',(req,res)=>{
    Post.findById(req.params.id,(err,post)=>{
        if(err){
            res.send(err)
        }else{
            res.render('posts/comment.ejs',{post:post})
        }
    })
})

router.post('/',isLoggedIn,(req,res)=>{
    Post.findById(req.params.id,(err,post)=>{
        if(err){
            res.send(err)
        }else{
            Comment.create(req.body,(err,createdComment)=>{
                if(err){
                    res.send(err)
                }else{
                    createdComment.commentText= req.body.commentText;
                    createdComment.author.id= req.user._id;
                    createdComment.author.username = req.user.username;
                    createdComment.save();
                    post.comments.push(createdComment);
                    post.save();
                    req.flash("success","Thank you~ ")
                    res.redirect('/posts/'+ post._id)
                }
            })
        }
    })
})


function isLoggedIn(req,res,next){
	if(req.isAuthenticated()){
		return next()
	}
	req.flash('error','please login or signUp first')
	res.redirect('/login')
}



module.exports= router;