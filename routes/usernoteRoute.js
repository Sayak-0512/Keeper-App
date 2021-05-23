const express = require('express');
const session = require('express-session');
const passport= require("passport");
const cors = require('cors');
const passportLocalMongoose = require('passport-local-mongoose');
const router=express.Router();
const Usernote= require("../models/usernoteModel");
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const findOrCreate=require('mongoose-findorcreate');
const superagent=require('superagent')
const app=express();

app.use(cors());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods","GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});
passport.use(Usernote.createStrategy());
passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

// passport.use(new GoogleStrategy({
//   clientID: process.env.GOOGLE_CLIENT_ID,
//   clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//   callbackURL: "http://localhost:3001/auth/google/remnotes",
//   userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo"
// },
// function(accessToken, refreshToken, profile, cb) {
//   Usernote.findOrCreate({ googleId: profile.id ,username: profile.displayName}, function (err, user) {
//     return cb(err, user);
//   });
// }
// ));

app.post("/locallogin",(req,res) => {
console.log(req.body);
  const usernote=new Usernote({
    username: req.body.username,
    password: req.body.password
  });
  // let flag=0;
  req.login(usernote, function(err){
      if(err)
      {
          console.log(err);
          res.json({success: false, message:"Your account could not be saved. Error: ", err});
      }

      else
      {

        passport.authenticate("local")(req,res,function(){
            // flag=1;
          res.json({success: true, message:"Your account is saved."});
        });
      }
      // if(flag===0)
      // {
      //     res.json({success: false, message:"Wrong credentials"});
      // }
  }
);
});

// app.get('/auth/google',
//   passport.authenticate('google', { scope: ['profile'] }));

// app.get('/auth/google/remnotes', 
// passport.authenticate('google', { failureRedirect: '/loginerror' }),
// function(req, res) {
//   // Successful authentication, redirect home.
//   res.json({success: true, message: "Successful connection set up"})
// });
// app.get("/loginerror",(req,res) => {
//   res.json({success: false, message : "Error occured"})
// })


// app.get("/user/",(req,res) => {

//   const accessToken="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";
//   superagent
//     .get("https://api.github.com/user")
//     .set("Authorization", `token ${accessToken}`)
//     .set("user-agent", "node.js")
//     .then((apiresult) => {
//       res.send(apiresult.body);
//     })
// })

app.post("/googleregister",(req,res) => {

  Usernote.findOne({googleId: req.body.googleId},(err,user) => {
    if(user)
    res.json({success: true, message:"Your account is already there"});
    else if(!user)
    {
      const newuser=new Usernote({
        googleId: req.body.googleId,
        username: req.body.googleId
      })
      newuser.save();
      res.json({success: true, message:"Your account is created"});
    }
    else
    res.json({success: false, message:"Your account could not be saved. Error: ", err});
  } )
 
});

app.post("/facebookregister",(req,res) => {

  Usernote.findOne({facebookId: req.body.facebookId},(err,user) => {
    if(user)
    res.json({success: true, message:"Your account is already there"});
    else if(!user)
    {
      const newuser=new Usernote({
        facebookId: req.body.facebookId,
        username: req.body.facebookId
      })
      newuser.save();
      res.json({success: true, message:"Your account is created"});
    }
    else
    res.json({success: false, message:"Your account could not be saved. Error: ", err});
  } )
 
});

app.post("/localregister",(req,res) => {
  Usernote.register({username: req.body.username}, req.body.password,function(err,user){
    if(err)
    {
      console.log(err);
      res.json({success: false, message:"Your account could not be saved. Error: ", err});
  }
    else
    {
      passport.authenticate("local")(req,res,function(){
        res.json({success: true, message:"Your account is saved."});
      })
    }
});
});

app.post("/create",async (req,res) => {
  const username= req.body.username;
  const title=req.body.title;
  const content=req.body.content;
  const newNote={
    title: title,
    content: content
  };
  await Usernote.findOneAndUpdate({username: username},  { $push: { notes: newNote } },{
  returnOriginal: false
});

})
app.get("/notes",(req,res) => {
 Usernote.find({username: req.query.username})
  .then(foundNotes => res.json(foundNotes));
})

app.post("/delete",async (req,res) => {
  const username=req.body.username;
  const title=req.body.noteToBeDeleted.title;
  const content=req.body.noteToBeDeleted.content;
  const tobedeleted={title: title, content: content};
  await Usernote.findOneAndUpdate({username: username},  { $pull: { notes: tobedeleted } },{
    returnOriginal: false
  });
  // Usernote.deleteOne({title: title, content: content},function(err){
  //   if(err)
  //   console.log(err);
  //   else
  //   console.log("Note deleted successfully");
  // })
})
module.exports = app;





