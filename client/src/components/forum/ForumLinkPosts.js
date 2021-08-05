import React from "react";
import "./Post.scss";
import "./LikeCount.scss"
import LikeCount from "./LikeCount";
import Form from "./Form";

// const genreClass = classNames("genre-list__item", {
    //   "genre-list__item--selected": props.selected,
    // });




export default function ForumLinkPosts(props) {

  console.log(props.subGenres.id)

  if(!props.subGenres.sub_genre_posts) {
    return <h1>This board is currently Empty. Write a post!</h1>
  } else {

  return (
    
    
    
    <ul>
      {props.userId ? (
        <Form userId={props.userId} subgenreId={props.subGenres.id}/>
      ) : (
        <div> </div>
      )}
      {props.subGenres.sub_genre_posts.map((item) => {
        return (
            

            <article>
              <div className="post-user-profile">
                <img className="post-user-avatar" src={item.avatar} />
                <span>Spongebob223</span>
              </div>
              <div className="post-content">
                <p>{item.comment}</p>
                <LikeCount post={item} />
              </div>
            </article>

        );
      })}
    </ul>
  )};
}
