import React from "react";
import "./LikeCount.scss"

export default function LikeCount(props) {

  return (
    <div className="like-count">
    <button className="like-button"> Like </button>
    <span>{props.likes}</span>
    </div>
  )
};
