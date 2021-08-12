import React from "react";
import Form from "./Form";
import LikeCount from "./LikeCount";


// const genreClass = classNames("genre-list__item", {
    //   "genre-list__item--selected": props.selected,
    // });

export default function ForumPostsList(props) {





  if(props.posts[0].posts === undefined) {
    return []

  } else {


  if(props.posts[0].posts.length === 0) {
    return (
      <div className="forum-post-board">
        <h1>This board is currently Empty. Write a post!</h1>
        {props.userId ? (
        <Form setPost={props.setPost} setForumSubGenre={props.setForumSubGenre} setForumGenre={props.setForumGenre} genre={props.genre} subGenre={props.subGenre} currentUserAvatar={props.currentUserAvatar} userId={props.userId} subgenreId={props.posts[0].id}/>
      ) : (
        <div> </div>
      )}
    

     </div>
    )
  } else {
  
  return (
    
    <div className="forum-post-board">
      {props.userId ? (
        <Form setPost={props.setPost} setForumSubGenre={props.setForumSubGenre} setForumGenre={props.setForumGenre} genre={props.genre} subGenre={props.subGenre} currentUserAvatar={props.currentUserAvatar} userId={props.userId} subgenreId={props.posts[0].id}/>
      ) : (
        <div> </div>
      )}

      <div className="all-posts">

        {props.posts[0].posts.map((item) => {

          return (
              
            <article className="each-article dotted" key={item.id}>
              <div key={item.id+1} className="post-user-profile">
                <span key={item.id+2} >{item.user.username}</span>
                <img key={item.id+3} className="post-user-avatar" src={item.user.avatar} />
              </div>
              <div key={item.id+4} className="post-content">
                <p key={item.id+5} >{item.comment}</p>
                {props.userId && props.userId != item.user.id ? (
                  <LikeCount key={item.id+6} post={item} />
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