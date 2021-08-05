import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Login.scss";

export default function Login(props) {
  let id;
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

  useEffect(() => {

    setState((prev) => ({
      ...prev,
      currentUserId: id
    }))
  }, [props.currentUserId])
   
  function userLogin(email, password) {

    const loginParams = {
      email,
      password
    };

    console.log("loginParams", loginParams)

    return axios
      .post(`/api/login.json`, loginParams)
      .then((res) => {
        console.log(`login result: ${res.data}`)
        return res.data
      })
  };


  function save(event) {
    event.preventDefault();
    
      userLogin(state.email, state.password)
      .then((res) => {
        console.log(`result back from userLogin: ${res}`)
        id = res;
        props.setCurrentUserId(id);
      })

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