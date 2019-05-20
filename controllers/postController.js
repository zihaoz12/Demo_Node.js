const express = require('express');
const router = express.Router();
const Posts = require('../models/posts');


//index routes
router.get('/',async(req,res)=>{
	const allPosts = await Posts.find({});
	res.render('posts/posts.ejs',{
		posts:allPosts,
	})
});

//new routes
router.get('/new',(req,res)=>{
	res.render('posts/new.ejs')
});

router.post('/',async(req,res)=>{
	try{
		Posts.create(req.body,(err,createPost)=>{
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
		Posts.findById(req.params.id,(err,foundPost)=>{
			if(err){
				res.send(err)
			}else{
				res.render('posts/show.ejs',{
					post:foundPost
				})
			}
		})
	}catch(error){
		res.send(error)
	}
});

//edit routes
router.get('/:id/edit',async(req,res)=>{
	try{
		Posts.findById(req.params.id,(err,foundPost)=>{
			if(err){
				res.send(err)
			}else{
				res.render('posts/edit.ejs',{
					post:foundPost
				})
			}
		})
	}catch(error){
		res.send(error)
	}
});

router.put('/:id',async(req,res)=>{
	try{
		Posts.findByIdAndUpdate(req.params.id,req.body, {new:true},(err,updatePost)=>{
			if(err){
				res.send(err)
			}else{
				res.redirect('/posts/'+ req.params.id)
			}
		})
	}catch(error){
		res.send(error)
	}
});

//Delete routes
router.delete('/:id',(req,res)=>{
	Posts.findByIdAndRemove(req.params.id,(err,deletePost)=>{
		if(err){
			res.send(err)
		}else{
			console.log("delete post")
			res.redirect('/posts')
		}
	})
});

module.exports = router;