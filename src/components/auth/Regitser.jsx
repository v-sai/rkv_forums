import React, { useState } from "react";
import styles from "./Register.module.css";
import { NavLink, useNavigate } from "react-router-dom";

function Regitser() {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    console.log("Handle sumbnit",name, email, password);
  };

  return (
    <div className={styles.register_container}>
      <h1 className={styles.login_title}>Register</h1>
      <input
        className={styles.input_register}
        type="text"
        placeholder=" Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className={styles.input_register}
        type="text"
        placeholder=" Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className={styles.input_register}
        type="password"
        placeholder=" Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={(e) => handleSubmit(e)} className={styles.reg_btn}>
        Join Now
      </button>
      <p className={styles.login_txt}>
        Already have an account? &nbsp;
        <NavLink onClick={() => navigate("/login")}>SignIn</NavLink>
      </p>
    </div>
  );
}

export default Regitser;
