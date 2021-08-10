import React, { useState } from "react";
import useUserAuthentication from "../hooks/useUserAuthentication";
import { useHistory } from "react-router-dom";
import "./Form.scss";

export default function Login() {
  let history = useHistory();

  const [state, setState] = useState({
    email: "",
    password: "",
  });

  function handleChange(event) {
    const value = event.target.value;
    setState({
      ...state,
      [event.target.name]: value,
    });
  }

  const { userLogin } = useUserAuthentication();

  function save(event) {
    event.preventDefault();

    userLogin(state.email, state.password)
      .then((res) => {
        console.log(`result back from userLogin: ${JSON.stringify(res)}`);
        localStorage.setItem("user", JSON.stringify(res));
      })
      .then(() => {
        history.push("/");
      });
  }

  return (
    <div className="form-container">
      <form className="form-box">
        <h1>Login</h1>
        <div className="user-box">
          <input
            type="text"
            placeholder="Email"
            name="email"
            value={state.email}
            onChange={handleChange}
          />
        </div>

        <div className="user-box">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={state.password}
            onChange={handleChange}
          />
        </div>

        <button
          className="submit-button"
          type="submit"
          onClick={(event) => {
            save(event);
          }}
        >
          <span>Login</span>
        </button>
      </form>
    </div>
  );
}
