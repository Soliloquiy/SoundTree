import React from "react";
import "./Post.scss";
import "./LikeCount.scss"
import LikeCount from "./LikeCount";

// const genreClass = classNames("genre-list__item", {
    //   "genre-list__item--selected": props.selected,
    // });




export default function ForumLinkPosts(props) {


  return (
    
    <ul>
      {props.subGenres.sub_genre_posts.map((item) => {
        return (

          
          <article>
            <div className="post-user-profile">
              <img className="post-user-avatar" src={item.avatar} />
              <span>Spongebob223</span>
            </div>
            <div className="post-content">
              <p>{item.comment}</p>
              <LikeCount likes={item.like_count} />
            </div>
          </article>
        );
      })}
    </ul>
  );
}
