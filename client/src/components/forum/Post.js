import React from "react";
import "./Post.scss";
import LikeCount from "./LikeCount";

export default function Post(props) {

  return (
    <article>
      <div className="post-user-profile">
        <img className="post-user-avatar" src="https://img.icons8.com/ios/452/spongebob-squarepants.png" />
        <span>Spongebob223</span>
      </div>
      <div className="post-content">
        <p>I love this song, it's amazing.</p>
        <LikeCount />
      </div>
    </article>
  )
};