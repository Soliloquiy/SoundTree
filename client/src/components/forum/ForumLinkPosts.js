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

  if(props.subGenres.posts.length === 0) {
    return (
      <div>
        <h1>This board is currently Empty. Write a post!</h1>
        {props.userId ? (
        <Form userId={props.userId} subgenreId={props.subGenres.id}/>
      ) : (
        <div> </div>
      )}
    

     </div>
    )
  } else {

  return (
    
    
    
    <ul>
      {props.userId ? (
        <Form currentUserAvatar={props.currentUserAvatar} userId={props.userId} subgenreId={props.subGenres.id}/>
      ) : (
        <div> </div>
      )}
      {props.subGenres.posts.map((item) => {
        return (
          <div> 
            
              <article>
                <div className="post-user-profile">
                  <img className="post-user-avatar" src={item.user.avatar} />
                  <span>{item.user.username}</span>
                </div>
                <div className="post-content">
                  <p>{item.comment}</p>
                  {props.userId ? (
                    <LikeCount post={item} />
                  ) : (
                    <div> </div>
                  )}
                  
                </div>
              </article>

            </div>
        );
      })}
    </ul>
  )};
}
