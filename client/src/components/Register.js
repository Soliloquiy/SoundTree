import React, { useState } from "react";
import useUserAuthentication from "../hooks/useUserAuthentication";
import "./Register.scss";
import { register } from "../serviceWorker";

export default function Register() {
  const [state, setState] = useState({
    username: "",
    email: "",
    password: "",
    avatar: ""
  })

  function handleChange(event) {
    const value = event.target.value;
    setState({
      ...state,
      [event.target.name]: value
    });
  }

  const { registerUser } = useUserAuthentication();

  function save(event) {
    event.preventDefault();
    registerUser(state.username, state.email, state.password, state.avatar)
  };


  return (
    <form className="register-form">
      <div className="register-container">
        <h1>Register</h1>

        <div className="form-group">
          <label><b>Username</b></label>
          <input 
            type="text" 
            className="form-control"
            placeholder="Enter Username" 
            name="username"
            value={state.username}
            onChange={handleChange}
          />
        </div>
        
        <div className="form-group">
        <label><b>Email</b></label>
        <input 
          type="text"
          className="form-control"
          placeholder="Enter Email" 
          name="email" 
          value={state.email}
          onChange={handleChange}
        />
        </div>

        <div className="form-group">
        <label><b>Password</b></label>
        <input 
          type="text"
          className="form-control"
          placeholder="Enter Password" 
          name="password"
          value={state.password}
          onChange={handleChange}
        />
        </div>

        <div className="form-group">
        <label><b>Avatar</b></label>
        <input 
          type="text"
          className="form-control"
          placeholder="Enter avatar url" 
          name="avatar"
          value={state.avatar}
          onChange={handleChange}
        />
        </div>

        <button type="submit" onClick={(event) => save(event)}>Register</button>
      </div>
    </form>
  )
};