import React, {useEffect, useState} from "react";
import axios from 'axios'
import "./Forum.scss";
import ForumGenreList from "./ForumGenreList";
import ForumSubGenreList from "./ForumSubGenreList";
import ForumPostsList from "./ForumPostsList";

export default function Forum(props) {

  const [state, setState] = useState({
    forumGenre: "",
    forumGenres: [],
    forumSubGenre: "",
    forumSubGenres: [],
    forumPostsForGenre: [],
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

  const setForumGenre = (forumGenre) => setState({ ...state, forumGenre }); 
  const setForumSubGenre = (forumSubGenre) => setState({ ...state, forumSubGenre });

  function getForumSubGenresWithGenre(state, genreName) {
    const foundGenre = state.forumGenres.filter((genre) => genre.name === genreName)[0];
  
    if (!genreName || !foundGenre) {
      return [];
    }
  
    const subGenres = foundGenre;
    
    
    return subGenres
  }

  function getForumPostsForSubGenre(state, genreName) {
    const foundGenre = state.forumSubGenres.filter((genre) => genre.name === genreName)[0];
  
    if (!genreName || !foundGenre) {
      return [];
    }
  
    const posts = foundGenre;
    
    
    return posts
  }

  const currentForumSubGenres = getForumSubGenresWithGenre(state, state.forumGenre)

  useEffect(() => {
    
    setState((prev) => ({
      ...prev,
      forumSubGenres: currentForumSubGenres.subgenres,
      forumSubGenre: ""
    }))
  }, [state.forumGenre]);

  useEffect(() => {
    const currentForumPosts = getForumPostsForSubGenre(state, state.forumSubGenre)

    
    setState((prev) => ({
      ...prev,
      forumPostsForGenre: currentForumPosts
    }))
  }, [state.forumSubGenre]);

  console.log(state.forumSubGenres)
  console.log(props.currentUserId)

  return (
    <div className="forum-index-page">
      <ForumGenreList setGenre={setForumGenre} genres={state.forumGenres} />
      <ForumSubGenreList userId={props.currentUserId} setSubGenre={setForumSubGenre} genre={state.forumGenre} genres={[currentForumSubGenres]} />
      <ForumPostsList currentUserAvatar={props.currentUserAvatar} userId={props.currentUserId} subGenre={state.ForumSubGenre} posts={[state.forumPostsForGenre]} />
    </div>
    
  )
};