import React from "react";
import "./Post.scss";
import LikeCount from "./LikeCount";

export default function Post(props) {

  return (
    <article>
      <div className="post_user_profile">
        <img className="post_user_avatar" src="https://img.icons8.com/ios/452/spongebob-squarepants.png" />
        <span>Spongebob223</span>
      </div>
      <div className="post_content">
        <p>I love this song, it's amazing.</p>
        <LikeCount />
      </div>
    </article>
  )
};