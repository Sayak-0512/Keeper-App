import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';
import axios from "axios";
function Note(props) {
  function handleClick(event){
    event.preventDefault();

    props.handleDelete(props.id);
    const noteToBeDeleted={
      title: props.title,
      content: props.content
    }
    axios.post("http://localhost:3001/delete", noteToBeDeleted);
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
