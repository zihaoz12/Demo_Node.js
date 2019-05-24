const mongoose = require('mongoose');


const PostSchema = new mongoose.Schema({
    title:String,
    imgUrl:String,
    description:String,
    date:Date,
    author:{
        id:{
            type: mongoose.Schema.Types.ObjectId,
            ref:"User"
        },
        username:String
    },
    comments:[
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Comment"
    }],
});

const Posts = mongoose.model('Posts',PostSchema)

module.exports = Posts;