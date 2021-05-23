import React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
function LogOut(){
  const bClass=classNames("logout", "btn","btn-outline-dark");
  return <div>
  <Link to="/">
  <button type="submit" className={bClass} onClick={() => localStorage.removeItem("username")}>Log Out</button>
  </Link>
  </div>
}
export default LogOut;
