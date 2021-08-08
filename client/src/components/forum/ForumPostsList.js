import React from "react";
import Form from "./Form";
import LikeCount from "./LikeCount";


// const genreClass = classNames("genre-list__item", {
    //   "genre-list__item--selected": props.selected,
    // });

export default function ForumPostsList(props) {

  console.log(props.posts)
  console.log(props.posts[0].posts)
  console.log(props.userId)

  if(props.posts[0].posts === undefined) {
    return []

  } else {


  if(props.posts[0].posts.length === 0) {
    return (
      <div className="forum-post-board">
        <h1>This board is currently Empty. Write a post!</h1>
        {props.userId ? (
        <Form currentUserAvatar={props.currentUserAvatar} userId={props.userId} subgenreId={props.posts[0].id}/>
      ) : (
        <div> </div>
      )}
    

     </div>
    )
  } else {
  
  return (
    
    <div className="forum-post-board">
      {props.userId ? (
        <Form currentUserAvatar={props.currentUserAvatar} userId={props.userId} subgenreId={props.posts[0].id}/>
      ) : (
        <div> </div>
      )}

      <div className="all-posts">

        {props.posts[0].posts.map((item) => {

          return (
              
            <article className="each-article dotted">
              <div className="post-user-profile">
                <span>{item.user.username}</span>
                <img className="post-user-avatar" src={item.user.avatar} />
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

          );
        })}

      </div>

    </div>
  )};
    }
}