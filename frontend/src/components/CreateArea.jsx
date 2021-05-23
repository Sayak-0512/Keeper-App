import React,{useState} from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';
import axios from "axios";
require('dotenv').config();

function CreateArea(props) {
  const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT ;
  const [isExpanded,setIsExpanded]=useState(false);
  const [input,setInput]=useState({
    title:"",
    content:""
  })
function handleChange(event){
  const {name,value}=event.target;
  setInput(prevValue => {
    return {
      ...prevValue,
      [name]: value
    }
  });
}
function handleSubmit(event){
  event.preventDefault();

  const newNote={
    username: props.username,
    title: input.title,
    content:input.content
  }
  axios.post(`${API_ENDPOINT}/create`,newNote);
  props.handleClick(input);

  setInput({title: "", content: ""})
}
function handleExpansion(){
  setIsExpanded(true);
}
  return (
    <div>
      <form className="create-note">
      {  isExpanded && <input onChange={handleChange} name="title" placeholder="Title" value={input.title} />}
        <textarea onClick={handleExpansion} onChange={handleChange} name="content" placeholder="Take a note..." rows={isExpanded ? 3 :1} value={input.content} />
      <Zoom in={isExpanded}>
        <Fab onClick={handleSubmit}>
        <AddIcon />
        </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
