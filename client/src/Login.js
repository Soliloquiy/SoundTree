import React, { useState } from "react";
import useUserAuthentication from "./hooks/useUserAuthentication";
import "./Login.scss";

export default function Login() {
  const [state, setState] = useState({
    email: "",
    password: ""
  });

  function handleChange(event) {
    const value = event.target.value;
    setState({
      ...state,
      [event.target.name]: value
    });
  }


  const { userLogin } = useUserAuthentication();

  function save(event) {
    event.preventDefault();
    userLogin(state.email, state.password)
  };

  return (
    <form className="login-form">
      <div className="login-container">
        <h1>Login</h1>

        <label><b>Email</b></label>
        <input 
          type="text"
          placeholder="Enter Email"
          name="email"
          value={state.email}
          onChange={handleChange}
        />

        <label><b>Password</b></label>
        <input 
          type="password"
          placeholder="Enter Password"
          name="password"
          value={state.password}
          onChange={handleChange}
        />

        <button type="submit" onClick={(event) => {save(event)}}>Login</button>
      </div>
    </form>
  )
};