import React, { useState } from "react";
import axios from "axios";

export default function Form(props) {


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
    sendPost(props.userId, props.subgenreId, state.comment)
  };


  return (
    <main className="post-form">
      <img className="post-user-avatar" src={props.currentUserAvatar}/>
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