import React, { useState } from "react";
import "./Register.scss";

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


  return (
    <form className="register-form">
      <div className="register-container">
        <h1>Register</h1>

        <label><b>Username</b></label>
        <input 
          type="text" 
          placeholder="Enter Username" 
          name="username"
          value={state.username}
          onChange={handleChange}
        />

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

        <label><b>Avatar</b></label>
        <input 
          type="url" 
          placeholder="Enter avatar url" 
          name="avatar"
          value={state.avatar}
          onChange={handleChange}
        />

        <button type="submit" value="submit">Register</button>
      </div>
    </form>
  )
};