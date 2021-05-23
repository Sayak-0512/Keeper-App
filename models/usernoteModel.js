const mongoose = require('mongoose');
const session = require('express-session');
const passport= require("passport");
const passportLocalMongoose = require('passport-local-mongoose');
const findOrCreate=require('mongoose-findorcreate');
const usernoteSchema=new mongoose.Schema({
  facebookId:String,
  googleId:String,
  username: String,
  password: String,
  notes: [{ 
    id: Number,
    title: String,
    content: String
  }]
 
});
usernoteSchema.plugin(passportLocalMongoose);
usernoteSchema.plugin(findOrCreate);

const Usernote=mongoose.model("Usernote",usernoteSchema);
module.exports = Usernote;
