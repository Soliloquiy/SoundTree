import React, { useState } from "react";
import "./LikeCount.scss";
import axios from "axios";


export default function LikeCount(props) {

  const [state, setState] = useState({
    like_count: props.post.like_count
  })

  const setLike = (like_count) => setState({ ...state, like_count });

  function sendLike(id, LikeCount) {


    const like_count = LikeCount + 1

        const data = 
          {
              id,
              like_count
            }
            
          
        setLike(like_count)
        console.log("data: ", data)
    
        return axios
          .put(`/api/posts/${id}.json`, data)
          .then(() => {
            
            console.log("post create sent to rails")
          })
      }

  return (
    <div className="like-count">
    <button className="like-button" onClick={() => {sendLike(props.post.id, state.like_count)}} > Like </button>
    <span>{state.like_count}</span>
    </div>
  );
}