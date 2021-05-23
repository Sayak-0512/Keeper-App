import React from "react";
import classNames from "classnames";
import axios from "axios";
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import { Link, useHistory  } from "react-router-dom";
require('dotenv').config();




function SocialSignup(props){
  const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;
 
  const history=useHistory();

  const responseGoogle = (response) => {
    console.log(response.profileObj);
    const formDetails={googleId: response.profileObj.googleId, username: response.profileObj.name};
    axios.post(`${API_ENDPOINT}/googleregister`,formDetails)
    .then(res => {

      if(res.data.success===true){
        history.push({
          pathname: '/user',
          username: response.profileObj.googleId,
          
        });
      }
      else{
          history.push("/error");
      }
    })
    .catch(err => {
      history.push('/error');
    });
  }
  const responseErrorGoogle = (response) => {
    console.log(response);
  }



  const responseFacebook= (response) => {
    console.log(response);
    const formDetails={facebookId: response.id, username: response.name};
    if(formDetails.facebookId)
    {
      axios.post(`${API_ENDPOINT}/facebookregister`,formDetails)
      .then(res => {
  
        if(res.data.success===true){
          history.push({
            pathname: '/user',
            username: response.id,
            
          });
        }
        else{
            history.push("/error");
        }
      })
      .catch(err => {
        history.push('/error');
      });
    }
    
  }




  const aClass = classNames('btn', 'btn-social', 'btn-block', props.button)
  const iClass= classNames("fab", props.fab)
  return   <div className="card">
      <div className="card-body shadow-decoration">
            

        {props.text==="Google" &&  <GoogleLogin
            clientId="991393743477-po8509p39sss4os4otnghgq2ib7i5t6r.apps.googleusercontent.com"
            render={renderProps => {
             
              return ( 
                <a className={aClass} style={{color:"white"}} onClick={renderProps.onClick} disabled={renderProps.disabled} role="button">
                                          <i className={iClass}></i>
                                          Sign Up with {props.text}
                                        </a>
              )
            }}
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseErrorGoogle}
            cookiePolicy={'single_host_origin'}
          />}

       {props.text==="Facebook" &&   <FacebookLogin
        appId="241023217791697"
      
        fields="name,email,picture"
        callback={responseFacebook}
        render={renderProps => (
          <a className={aClass} onClick={renderProps.onClick} style={{color:"white"}}  disabled={renderProps.disabled} role="button">
                                                <i className={iClass}></i>
                                                Sign Up with {props.text}
                                              </a>
          
        )}
      />}

        
      </div>
    </div>
}
export default SocialSignup;
