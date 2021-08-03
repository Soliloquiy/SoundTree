import React, { useState } from "react";
import "./Form.scss";
import axios from "axios";

export default function Form() {


  function sendPost(user_id, subgenre_id, comment) {

    const data = 
      {"post": {
          user_id,
          subgenre_id,
          comment
        }
        
      };

    console.log("data: ", data)

    return axios
      .post(`/api/posts.json`, data)
      .then(() => {
        console.log("post create sent to rails")
      })
  }



  const [state, setState] = useState({
    comment: "",
  })



  function handleChange(event) {
    const value = event.target.value;
    setState({
      ...state,
      [event.target.name]: value
    });
  }

  function save(event) {
    event.preventDefault();
    sendPost(1, 1, state.comment)
  };


  return (
    <main className="post-form">
      <img className="post-user-avatar" src="https://img.icons8.com/ios/452/spongebob-squarepants.png"/>
      <form>
        <textarea type="text" 
          placeholder="Enter comment" 
          name="comment"
          value={state.comment}
          onChange={handleChange}/>
        <button type="submit" onClick={(event) => save(event)}>Post</button>
      </form>
    </main>
   
  )

}