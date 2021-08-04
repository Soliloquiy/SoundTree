import React from "react";
import "./LikeCount.scss";

export default function LikeCount() {
  return (
    <div className="like-count">
      <button className="like-button"> Like </button>
      <span>50</span>
    </div>
  );
}
