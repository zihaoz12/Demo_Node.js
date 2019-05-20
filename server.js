const express = require('express');
const app 	  = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const session = require('express-session');
const PORT = process.env.PORT || 3000;

require('./db/db');

const postController = require('./controllers/postController');

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false
}));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(methodOverride('_method'));
app.use(express.static(__dirname + '/public'));


app.use('/posts',postController);


app.get('/',(req,res)=>{
	res.render('index.ejs')
});

app.get('/about',(req,res)=>{
	res.render('partials/about.ejs')
});

app.get('/auth',(req,res)=>{
	res.render('users/login.ejs')
});


app.listen(PORT,()=>{
	console.log("App is listening at : ", PORT);
})