import React, { useState, useEffect } from 'react';
import '../App.css';
import GenreList from './GenreList';
import SubGenreList from './SubGenreList';
import SongsForSubGenre from './SongsForSubGenre';
import axios from 'axios'

export default function Application(props) {
  

  const [state, setState] = useState({
    genre: "",
    genres: [],
    subGenres: [],
    subGenre: "",
    songsForGenre: [],
    songs: [],
    userId: ""
  })

  useEffect(() => {
    Promise.all([
      axios.get("/api/genres"),
      axios.get("api/subgenres"),
      // axios.get("/api/users"),
    ]).then((all) => {
      setState((prev) => ({
        ...prev,
        genres: all[0].data,
        songsForGenre: all[1].data,
        // users: all[2].data,
      }));
    });
  }, []);

  const setGenre = (genre) => setState({ ...state, genre });
  
  
  const setSubGenre = (subGenre) => setState({ ...state, subGenre });



  function getSubGenresWithGenre(state, genreName) {
    const foundGenre = state.genres.filter((genre) => genre.name === genreName)[0];
  
    if (!genreName || !foundGenre) {
      return [];
    }
  
    const subGenres = foundGenre;
    
    
    return subGenres
  }

  function getSongsForSubGenre(state, genreName) {
    const foundGenre = state.songsForGenre.filter((genre) => genre.name === genreName)[0];
  
    if (!genreName || !foundGenre) {
      return [];
    }
  
    const songs = foundGenre;
    
    
    return songs
  }

  // console.log(getSongsForSubGenre(state, 'Metal'))
  // console.log(getSongsForSubGenre(state, 'Metal 1'))


  const currentSubGenres = getSubGenresWithGenre(state, state.genre)
  const currentSongs = getSongsForSubGenre(state, state.subGenre)
  console.log(state.genre)
  console.log(state.subGenre)
  
  useEffect(() => {
    
    setState((prev) => ({
      ...prev,
      subGenres: currentSubGenres.subgenres,
      subGenre: ""
    }))
  }, [state.genre]);

  useEffect(() => {
    
    setState((prev) => ({
      ...prev,
      songs: currentSongs.songs
    }))
  }, [state.subGenre]);

  console.log(state.songs)

  

  

  return (
    <main className="home-layout">
      <GenreList setGenre={setGenre} genres={state.genres}  /> <br></br>
      <SubGenreList userId={props.currentUserId} setSubGenre={setSubGenre} genre={state.genre} genres={[currentSubGenres]} />
      <SongsForSubGenre subGenre={state.subGenre} songs={[currentSongs]} />
    </main>
  )

}