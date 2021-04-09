require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app=express();

app.use(cors());
app.use(express.json());
const password=process.env.ATLAS_PASSWORD;
const username=process.env.USER_NAME;
const url=`mongodb+srv://${username}:${password}@gettingstarted.5l8yh.mongodb.net/keeperDb`;

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true  });

app.use("/",require("./routes/noteRoute"));

app.listen(3001, function(){
  console.log("Server is running on port 3001");
})
