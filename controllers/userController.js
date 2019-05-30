const express = require('express');
const router = express.Router();
const User = require('../models/user');
const passport = require('passport');
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

module.exports = router;