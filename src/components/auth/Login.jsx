import React, { useState } from "react";
import styles from "./Login.module.css";
import { NavLink, useNavigate } from "react-router-dom";

function Login() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    console.log("Handle sumbnit", email, password);

  };

  return (
    <div className={styles.login_container}>
      <h1 className={styles.login_title}>Sign In</h1>
      <input
        className={styles.input_login}
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className={styles.input_login}
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={(e) => handleSubmit(e)} className={styles.login_btn}>
        Log In
      </button>
      <p className={styles.register_txt}>
        Don't have account? &nbsp;
        <NavLink onClick={() => navigate("/register")}>Register</NavLink>
      </p>
    </div>
  );
}

export default Login;
