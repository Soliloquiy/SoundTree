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
    post:""
  })
  console.log(state.post)

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




  

  





  const setPost = (post) => setState({ ...state, post }); 
  const setForumGenre = (forumGenre) => setState({ ...state, forumGenre }); 
  const setForumSubGenre = (forumSubGenre) => setState({ ...state, forumSubGenre });

  useEffect(() => {
    console.log("here1")
    
    

    Promise.all([
      axios.get("/api/genres"),
      axios.get("/api/forum"),
    ]).then((all) => {

      console.log(all[1].data)
    
      setState((prev) => ({
        ...prev,
        genres: all[0].data,
        forumGenres: all[1].data,
      }));

      console.log(all[1].data)

      if (state.post) {
      // console.log(currentForumPosts)
      // console.log(state.forumSubGenres)
      // console.log(state.forumGenres)
  
      
      // setState((prev) => ({
      //   ...prev,
      //   forumPostsForGenre: currentForumPosts
      // }))
        
      }
      
      // setForumGenre("roots")
      // setForumSubGenre("roots")
      
      // props.setForumSubGenre(JSON.parse(localStorage.getItem("subgenre")))

      console.log("here")

      // console.log(state.forumGenre)
      // console.log(state.forumSubGenre)
      // console.log(state.post)
    })
  }, [state.post]);

  useEffect(() => {
    

    if(state.forumSubGenre) {
      const currentForumSubGenres = getForumSubGenresWithGenre(state, state.forumGenre)
      setState((prev) => ({
        ...prev,
        forumSubGenres: currentForumSubGenres.subgenres
      }))
      // console.log(state.forumGenres)
    }
    
  }, [state.forumGenres]);

  useEffect(() => {
    

    if(state.forumSubGenre) {
    const currentForumPosts = getForumPostsForSubGenre(state, state.forumSubGenre)

    
    setState((prev) => ({
      ...prev,
      forumPostsForGenre: currentForumPosts
    }))
      console.log(state.forumSubGenres)
    }
    
  }, [state.forumSubGenres]);

 
  


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
    console.log(currentForumPosts)

    
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
      <ForumPostsList setPost={setPost} setForumSubGenre={setForumSubGenre} setForumGenre={setForumGenre} genre={state.forumGenre} currentUserAvatar={props.currentUserAvatar} userId={props.currentUserId} subGenre={state.forumSubGenre} posts={[state.forumPostsForGenre]} />
    </div>
    
  )
};