import React,{useState} from "react";
import SocialLogin from "./SocialLogin.jsx";
import { Link , useHistory} from "react-router-dom";
import axios from "axios";
require('dotenv').config();

function LoginForm(){
  const API_ENDPOINT=process.env.REACT_APP_API_ENDPOINT;

  
     let history = useHistory();
const [username,setUserName]=useState("");
const [password,setPassword]=useState("");

function handleSubmit(event){
  event.preventDefault();
  const formDetails={username,password};
  axios.post(`${API_ENDPOINT}/locallogin`,formDetails)
  .then(res => {
    console.log(res);
    if(res.data.success===true){
      history.push({
        pathname: '/user',
        username: username,
      });
    }
    else{

        history.push("/error");
    }
  })
  .catch(err => {
    history.push("/error");
  });

}

  return <div className="container mt-5">
  <h1>Login</h1>

  <div className="row">
    <div className="col-sm-8" >
      <div className="card">
        <div className="card-body shadow-decoration">


          <form onSubmit={handleSubmit}>
          <div class="form-group">
              <label for="username">Username</label>
              <input type="text" class="form-control" name="username" placeholder="Username" value={username} onChange={(e) => {
                setUserName(e.target.value)
              }} />
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input type="password" class="form-control" name="password" placeholder="Password" value={password} onChange={(e) => {
                setPassword(e.target.value)
              }}  />
            </div>

            <button type="submit" className="btn btn-dark">Login</button>

          </form>
          <Link to="/register">
          <a className="not-registered" href="">Not registered? Register here</a>
          </Link>
        </div>

      </div>
    </div>
    <div className="col-sm-4">
    <h1>Or,</h1>
    <SocialLogin button="btn-google" href="/auth/google" fab="fa-google" text="Google" />
    <SocialLogin button="btn-facebook" href="/auth/facebook" fab="fa-facebook" text="Facebook" />
    {/* <SocialLogin button="btn-github" href="/auth/github" fab="fa-github" text="Github" /> */}
    </div>


  </div>
</div>
}

export default LoginForm;
