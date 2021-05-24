require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const session = require('express-session');
const passport= require("passport");
const passportLocalMongoose = require('passport-local-mongoose');
const path=require("path")

const app=express();
const port=process.env.PORT || 3001;
app.use(cors());

app.use(express.static(path.join(__dirname, 'build')));


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.get('/user', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.get('/error', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.use(express.json());
const password=process.env.ATLAS_PASSWORD;
const username=process.env.USER_NAME;
const url=`mongodb+srv://${username}:${password}@gettingstarted.5l8yh.mongodb.net/remnotesDb?retryWrites=true&w=majority`;
app.use(session({
  secret: 'My name is Sayak China',
  resave: false,
  saveUninitialized: false,
}));
app.use(passport.initialize());
app.use(passport.session());
mongoose.set('useCreateIndex', true);
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true,useFindAndModify: false  });
app.use("/",require("./routes/usernoteRoute"));

app.listen(port, function(){
  console.log("Server is running on port 3001");
})
