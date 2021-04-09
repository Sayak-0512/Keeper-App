import React, {useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {


const [noteList,setNoteList]=useState([]);

useEffect(()=>{
  fetch("http://localhost:3001/notes").then(res => {
    if(res.ok)
    return res.json();
  })
  .then(jsonRes =>  setNoteList(jsonRes));
})

function handleDelete(id){
  setNoteList(prevValue => {
    return prevValue.filter((note,index) => {
      return index!==id;
    })
  })

}
function handleClick(input){
  setNoteList(prevValue => {
  return  [...prevValue,
    {
      title: input.title,
      content: input.content
    }]
  });


}
  return (
    <div>
      <Header />
      <CreateArea handleClick={handleClick}/>
      {noteList.map((note,index) => (<Note key={index} title={note.title} id={index} content={note.content} handleDelete={handleDelete}/>))}

      <Footer />
    </div>
  );
}

export default App;
