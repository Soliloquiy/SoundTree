import React from "react";
import "./Form.scss";

export default function Form() {

  return (
    <main className="post-form">
      <img className="post-user-avatar" src="https://img.icons8.com/ios/452/spongebob-squarepants.png"/>
      <form>
        <textarea type="text"/>
        <button>Submit</button>
      </form>
    </main>
   
  )

}