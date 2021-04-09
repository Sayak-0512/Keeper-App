const express = require('express');
const router=express.Router();
const Note= require("../models/noteModel");
router.route("/create").post((req,res) => {
  const title=req.body.title;
  const content=req.body.content;
  const newNote=new Note({
    title,
    content
  });
  newNote.save();
});

router.route("/notes").get((req,res) => {
  Note.find()
  .then(foundNotes => res.json(foundNotes));
})
router.route("/delete").post((req,res) => {
  const title=req.body.title;
  const content=req.body.content;
  Note.deleteOne({title: title, content: content},function(err){
    if(err)
    console.log(err);
    else
    console.log("Note deleted successfully");
  })

})
module.exports = router;
