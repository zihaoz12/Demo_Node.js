const express = require('express');
const app 	  = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const session = require('express-session');
const PORT = process.env.PORT || 5000;
const passport = require('passport');
const LocalStrategy = require('passport-local');
const flash = require('connect-flash');

require('./db/db');

const User = require('./models/user');

const postController = require('./controllers/postController');
const userController = require('./controllers/userController');
const commentController = require('./controllers/commentController');
const adminController = require('./controllers/adminController');

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false
}));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(methodOverride('_method'));
app.use(express.static(__dirname + '/public'));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(flash());
app.use(require('cors')())

app.use((req,res,next)=>{
	res.locals.currentUser = req.user;
	res.locals.error = req.flash("error");
	res.locals.success = req.flash("success");
	next();
});

app.use('/posts',postController);
app.use('/',userController);
app.use('/posts/:id/comments',commentController);
app.use('/admin',adminController);

app.get('/',(req,res)=>{
	res.render('index.ejs')
});

app.get('/about',(req,res)=>{
	res.render('partials/about.ejs')
});

app.get('/admin',(req,res)=>{
	res.render('admin/index.ejs');
})

app.get('/facebookLogin',(req,res)=>{
	req.flash("error","Temporarily Out of service")
	res.redirect('back');
})

app.get('/googleLogin',(req,res)=>{
	req.flash("error","Temporarily Out of service")
	res.redirect('back');
})


app.listen(PORT,()=>{
	console.log("App is listening at : ", PORT);
})