import React from "react";
import "./Register.scss";

export default function Register() {

  return (
    <form className="register-form">
      <div className="register-container">
        <h1>Register</h1>

        <label><b>Username</b></label>
        <input type="text" placeholder="Enter Username" name="username" id="username" required />

        <label><b>Email</b></label>
        <input type="text" placeholder="Enter Email" name="email" id="email" required />

        <label><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="password" id="password" required />

        <label><b>Avatar</b></label>
        <input type="url" placeholder="Enter avatar url" name="avatar" id="avatar" />

        <button type="submit" class="login-button">Register</button>
      </div>
    </form>
  )
};