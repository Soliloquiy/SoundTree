import React from "react";
import "./Login.scss";

export default function Login() {

  return (
    <form className="login-form">
      <div class="login-container">
        <h1>Login</h1>

        <label for="email"><b>Email</b></label>
        <input type="text" placeholder="Enter Email" name="email" id="email" required />

        <label for="psw"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="psw" id="psw" required />

        <button type="submit" class="login-button">Login</button>
      </div>
    </form>
  )
};