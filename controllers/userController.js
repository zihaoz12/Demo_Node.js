const express = require('express');
const router = express.Router();
const User = require('../models/user');
const passport = require('passport');
const Post = require('../models/posts');
const LocalStrategy = require('passport-local');

router.get('/register',(req,res)=>{
    res.render('users/register.ejs')
});

router.post('/register',(req,res)=>{
    const {username, password, confirm_password} = req.body;
    if(!username || !password || !confirm_password){
        req.flash("error","Please enter all fields");
        res.redirect('back')
    }else if(password != confirm_password){
        req.flash("error","Passwords do not match");
        res.redirect('back')
    }else{
        User.findOne({username:username}).then(user=>{
            if(user){
                req.flash("error","Username is already exists");
                res.redirect('back')
            }else{
                let newUser = new User({username:req.body.username});
                User.register(newUser,req.body.password,(err,user)=>{
                    if(err){
                        req.flash("error",err.message)
                        return res.render('users/register.ejs')
                    }
                passport.authenticate("local")(req,res,function(){
                        console.log("create user--->",user.username)
                        req.flash('success',"you have signed up successfully")
                        res.redirect('/posts')
                    });
                });
            }
        })   
    }
});


router.get('/login',(req,res)=>{
    res.render('users/login.ejs')
});
router.post('/login',passport.authenticate("local",{
    successRedirect:"/posts",
    failureRedirect:"/login",
    failureFlash:true,
}),(req,res)=>{

});

router.get('/logout',(req,res)=>{
    req.logout();
    req.flash("success","Successfully Log Out");
    res.redirect('/posts');
    
});

router.get('/users/:id',(req,res)=>{
    User.findById(req.params.id,(err,foundUser)=>{
        if(err){
            res.send(err)
        }
        Post.find().where('author.id').equals(foundUser._id).exec((err,posts)=>{
            if(err){
                res.send(err)
            }
            res.render('users/show.ejs',{
                user:foundUser,
                posts:posts
            })
        })
    });
});



// router.get('/users/:id', async (req, res) => {
//     try {
//         const user = await User.findById(req.params.id)     
//         res.render('users/show.ejs', { 
//             user,
//         });
//         console.log(user)
//     } catch(err) {
//         res.send(err);
//     }
// });

module.exports = router;