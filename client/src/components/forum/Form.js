import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Form(props) {


  localStorage.setItem("genre", JSON.stringify(props.genre));
  localStorage.setItem("subgenre", JSON.stringify(props.subGenre));

  const [state, setState] = useState({
    // post:"",
    comment: "",
  })

  


    



    // useEffect(() => {
    //   console.log("here1")
      
  
    //   Promise.all([
    //     axios.get("/api/genres"),
    //     axios.get("/api/forum"),
    //   ]).then((all) => {

    //     console.log(all[1].data)
      
    //     setState((prev) => ({
    //       ...prev,
    //       genres: all[0].data,
    //       forumGenres: all[1].data,
    //     }));
    //     // props.setForumGenre("blues")
    //     // props.setForumSubGenre("roots")
        
    //     // props.setForumSubGenre(JSON.parse(localStorage.getItem("subgenre")))
  
    //     console.log("here")
  
    //     // console.log(state.forumGenre)
    //     // console.log(state.forumSubGenre)
    //     // console.log(state.post)
    //   });
    // }, [state.post]);



  

  



  
  // const setPost = (post) => setState({ ...state, post });


  function sendPost(user_id, subgenre_id, comment) {

    let count = 1

    const data = 
      {"post": {
          user_id,
          subgenre_id,
          comment
        }
        
      };
      console.log(JSON.parse(localStorage.getItem("genre")))
    console.log(localStorage)

    return axios
      .post(`/api/posts.json`, data)
      .then(() => {
        props.setPost(state.comment)
        // window.location.reload(false);
        setState((prev) => ({
          ...prev,
          post: state.comment,
          comment: ""
        }));
        
        console.log(state.post)
      })
  }


  function handleChange(event) {
    const value = event.target.value;
    setState({
      ...state,
      [event.target.name]: value
    });
  }

  function save(event) {
    // event.preventDefault();
    sendPost(props.userId, props.subgenreId, state.comment)

  };


  return (
    <main className="post-form">
      <img className="post-user-avatar" src={props.currentUserAvatar}/>
      <form>
        <textarea
          id="new-post-text"
          className="cyberpunk"
          type="text" 
          placeholder="What do you think?" 
          name="comment"
          value={state.comment}
          onChange={handleChange}/>
      </form>
      <button className="post-button" type="submit" onClick={(event) => save(event)}>
        <span className="btn__content">
         Post
        </span>
      </button>
    </main>
   
  )

}