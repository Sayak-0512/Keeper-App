import React from "react";
import styles from "./Error.module.css";
import { Link } from "react-router-dom";
function Error(){
  return <div>
  <aside >
  <img className={styles.image} src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4424790/Mirror.png" alt="Error Image" />
  </aside>
  <main className={styles.text}>
    <h1 className={styles.heading}>Sorry!</h1>
    <p className={styles.para}>
      Either you aren't cool enough to visit this page(Wrong credentials) or it doesn't exist <em>. . . like your social life.</em>
    </p>
    <Link to="/">
    <button className={styles.buttonerror}>Click here to login</button>
    </Link>
    <Link to="/register">
    <button className={styles.buttonerror}>Click here to register</button>
    </Link>
  </main>
</div>
}
export default Error;
