import React, {useEffect, useState} from "react";
import Form from "./Form";
import Post from "./Post";
import ForumGenreLinks from "./ForumGenreLinks";
import axios from 'axios'

import "./Board.scss";




export default function Board(props) {

  const [state, setState] = useState({
    forumGenres: []
  })
  
  useEffect(() => {
    Promise.all([
      axios.get("/api/genres"),
      axios.get("/api/forum"),
    ]).then((all) => {
      setState((prev) => ({
        ...prev,
        genres: all[0].data,
        forumGenres: all[1].data,
      }));
    });
  }, []);

  // return (
  //   <main className="post-board">
  //     <section>
  //       <Form />
  //     </section>
  //     <section>
  //       <Post />
  //       <Post />
  //     </section>
  //   </main>
  // )

  return (
    <div>
      <ForumGenreLinks currentUserAvatar={props.currentUserAvatar} userId={props.currentUserId} genres={state.forumGenres}/>
    </div>
    
  )
};