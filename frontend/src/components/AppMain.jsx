import React,{useState, useEffect} from "react";
import { BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import LoginForm from "./LoginForm";
import Header from "./Header";
import Footer from "./Footer";
import App from "./App";
import SignupForm from "./SignupForm";
import Error from "./Error";

function AppMain(){
  // const [userInfoShow,setUserInfoShow]=useState(false);
  const [loggedIn, setloggedIn] = useState(false);
  useEffect(() => {
    if(localStorage.getItem('username')===null)
    setloggedIn(false);
    else
    setloggedIn(!loggedIn);
  }, [loggedIn])

  return (
    <div>
    <Header />
      <Router>
        <Switch>
            <Route path="/" exact >
              {loggedIn? <Redirect to="/user" /> : <LoginForm />}
            </Route>
            <Route path="/user" component={App} />
            <Route path="/register" exact component={SignupForm} />
            <Route path="/error" exact component={Error} />
        </Switch>
      </Router>
      <Footer />
    </div>
  )
}
export default AppMain;
