const express = require('express');
const router = express.Router();
const Posts = require('../models/posts');
const Comment = require('../models/comments');
const User = require('../models/user');


//index routes
router.get('/',async(req,res)=>{
	const allPosts = await Posts.find({});
	// res.render('posts/posts.ejs',{
	// 	posts:allPosts,
	// 	currentUser:req.user
	// })
	res.send(allPosts)
});

//new routes
router.get('/new',isLoggedIn,(req,res)=>{
	res.render('posts/new.ejs')
});

router.post('/',async(req,res)=>{
	const title= req.body.title;
	const imgUrl=req.body.imgUrl;
	const description=req.body.description;
	const author = {
		id:req.user._id,
		username:req.user.username
	};
	const NewPost = {
		title:title,
		imgUrl:imgUrl,
		description:description,
		author:author,
	}
	
	try{
		Posts.create(NewPost,(err,createPost)=>{
			if(err){
				res.send(err)
			}else{		
				res.redirect('/posts')
			}
		})
	}catch(error){
		res.send(error)
	}

});

//show routes
router.get('/:id',async(req,res)=>{
	try{
		Posts.findById(req.params.id).populate("comments").exec((err,foundPost)=>{
			if(err){
				res.send(err)
			}else{
				// res.render('posts/show.ejs',{
				// 	post:foundPost
				// })
				res.send(foundPost)
			}
		})
	}catch(error){
		res.send(error)
	}
});

//edit routes
router.get('/:id/edit',checkPostsOwner,async(req,res)=>{
	
	try{
		Posts.findById(req.params.id,(err,foundPost)=>{
			if(err){
				res.send(err)
			}else{
			
					res.render('posts/edit.ejs',{
						post:foundPost
					});
								
			}
		})
	}catch(error){
		res.send(error)
	}
	
});

router.put('/:id',checkPostsOwner,async(req,res)=>{
	try{
		Posts.findByIdAndUpdate(req.params.id,req.body, {new:true},(err,updatePost)=>{
			if(err){
				res.send(err)
			}else{
				req.flash("success","update post successfully")
				res.redirect('/posts/'+ req.params.id)
			}
		})
	}catch(error){
		res.send(error)
	}
});

//Delete routes
router.delete('/:id',checkPostsOwner,(req,res)=>{
	Posts.findByIdAndRemove(req.params.id,(err,deletePost)=>{
		if(err){
			res.send(err)
		}else{
			req.flash("success","Delete post successfully")
			res.redirect('/posts')
		}
	})
});

function isLoggedIn(req,res,next){
	if(req.isAuthenticated()){
		return next()
	}
	req.flash('error','please login or signUp first')
	res.redirect('/login')
}

function checkPostsOwner(req,res,next){
    if(req.isAuthenticated()){
        Posts.findById(req.params.id, (err,foundPost)=>{
			if(err){
				req.flash('error',"something wrong with this posts");
				res.redirect("back")
			}else{
				if(foundPost.author.username == req.user.username){
					next();
				}else{
					req.flash("error","You Don't have permission to do this");
					res.redirect('back')
				}
			}
		})
    }else{
		req.flash("error","You need to login to do this");
		res.redirect("back")
	}
}


module.exports = router;