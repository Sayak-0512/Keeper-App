import React, {useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import LogOut from "./LogOut";
import Error from "./Error";
import { useLocation } from "react-router";
import axios from "axios";
require('dotenv').config();

function App() {
const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT ;
const location=useLocation();

// console.log(curLocalstorage, "HELLO");
const [curUser, setcurUser] = useState();




const credentials=true;
// useEffect(()=>{
//   fetch("http://localhost:3001/user").then(res => {
//     if(res.ok)
//     return res.json();
//   })
//   .then(jsonRes =>  setNoteList(jsonRes));
// })
const [noteList,setNoteList]=useState([]);
useEffect(() => {
  // const curLocalstorage=localStorage.getItem('username');
  // console.log(curLocalstorage);
  if(localStorage.getItem("username")===null && location.username)
  {
    localStorage.setItem('username',location.username);
    setcurUser(location.username);
  
  }
  else
  {
    setcurUser(localStorage.getItem("username"));
  }
})
useEffect( ()=>{
 
  console.log(curUser);
 axios.get(`${API_ENDPOINT}/notes`,{
    params: {
      username: curUser
    }
  })
  .then(res => {
    console.log(res);
    console.log(res.data[0].notes);
    setNoteList(res.data[0].notes)
    // if(res.ok)
    // return res.json();
  })
  .catch(err => {
    console.log(err);
  })
  
},[location,curUser])

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
  })


}
if(credentials===true)
  return (
    <div>
    <LogOut />
    {/* <h1 style={{textAlign:"center", margin: "20px"}}>Welcome {curUser}</h1> */}
      <CreateArea username={location.username} handleClick={handleClick}/>
      {noteList && noteList.map((note,index) => (<Note username={location.username} key={index} title={note.title} id={index} content={note.content} handleDelete={handleDelete}/>))}
    </div>
  );
  else{
    return <Error />
  }
}

export default App;
