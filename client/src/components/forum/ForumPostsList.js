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
      <div>
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
    
    
    
    <ul>
      {props.userId ? (
        <Form currentUserAvatar={props.currentUserAvatar} userId={props.userId} subgenreId={props.posts[0].id}/>
      ) : (
        <div> </div>
      )}
      {props.posts[0].posts.map((item) => {
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
}