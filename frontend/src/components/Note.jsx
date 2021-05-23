import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';
import axios from "axios";
require('dotenv').config();
function Note(props) {
  const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT ;
  function handleClick(event){
    event.preventDefault();

    props.handleDelete(props.id);
    const noteToBeDeletedwithInfo={
      username: props.username,
      noteToBeDeleted: {title: props.title,
                        content: props.content}}
    axios.post(`${API_ENDPOINT}/delete`, noteToBeDeletedwithInfo);
  }
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}><DeleteIcon /></button>
    </div>
  );
}

export default Note;
