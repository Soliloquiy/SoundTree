import React, { useState } from "react";
import useUserAuthentication from "../hooks/useUserAuthentication";
import "./Form.scss";

export default function Register() {
  const [state, setState] = useState({
    username: "",
    email: "",
    password: "",
    avatar: "",
  });

  function handleChange(event) {
    const value = event.target.value;
    setState({
      ...state,
      [event.target.name]: value,
    });
  }

  const { registerUser } = useUserAuthentication();

  function save(event) {
    event.preventDefault();
    registerUser(state.username, state.email, state.password, state.avatar);
  }

  return (
    <div className="form-container">
      <form className="form-box">
        <h1>Register</h1>

        <div className="user-box">
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            name="username"
            value={state.username}
            onChange={handleChange}
          />
        </div>

        <div className="user-box">
          <input
            type="text"
            className="form-control"
            placeholder="Email"
            name="email"
            value={state.email}
            onChange={handleChange}
          />
        </div>

        <div className="user-box">
          <input
            type="text"
            className="form-control"
            placeholder="Password"
            name="password"
            value={state.password}
            onChange={handleChange}
          />
        </div>

        <div className="user-box">
          <input
            type="text"
            className="form-control"
            placeholder="Avatar Url"
            name="avatar"
            value={state.avatar}
            onChange={handleChange}
          />
        </div>

        <button
          className="submit-button"
          type="submit"
          onClick={(event) => save(event)}
        >
          <span>Register</span>
        </button>
      </form>
    </div>
  );
}
