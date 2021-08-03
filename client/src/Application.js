import React, { useState, useEffect } from 'react';
import './App.css';
import GenreList from './GenreList';
import SubGenreList from './SubGenreList';
import SongsForSubGenre from './SongsForSubGenre';

export default function Application(props) {

  const genres = [
    {
      name: "Metal",
      sub_genres: [
        "Metal 1",
        "Metal 2",
        "Metal 2",
        "Metal 4",
        "Metal 5",
        "Metal 6"
    ]},
    {
      name: "Rock",
      sub_genres: [
        "Rock 1",
        "Rock 2",
        "Rock 2",
        "Rock 4",
        "Rock 5",
        "Rock 6"
    ]},
    {
      name: "Country",
      sub_genres: [
        "Country 1",
        "Country 2",
        "Country 2",
        "Country 4",
        "Country 5",
        "Country 6"
    ]},
    {
      name: "HipHop",
      sub_genres: [
        "HipHop 1",
        "HipHop 2",
        "HipHop 2",
        "HipHop 4",
        "HipHop 5",
        "HipHop 6"
    ]}
  ]

  const songsForGenre = [
    {
      name: "Metal",
      songs: [
        "Metal Song 1",
        "Metal Song 2",
        "Metal Song 2",
        "Metal Song 4",
        "Metal Song 5",
        "Metal Song 6"
    ]},
    {
      name: "Metal 1",
      songs: [
        "Metal 1 Song 1",
        "Metal 1 Song 2",
        "Metal 1 Song 2",
        "Metal 1 Song 4",
        "Metal 1 Song 5",
        "Metal 1 Song 6"
    ]},
    {
      name: "Country",
      songs: [
        "Song 1",
        "Song 2",
        "Song 2",
        "Song 4",
        "Song 5",
        "Song 6"
    ]},
    {
      name: "HipHop",
      songs: [
        "Song 1",
        "Song 2",
        "Song 2",
        "Song 4",
        "Song 5",
        "Song 6"
    ]}
  ]
  

  const [state, setState] = useState({
    genre: "",
    genres: genres,
    subGenres: [],
    subGenre: "",
    songsForGenre: songsForGenre,
    songs: []
  })

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
  
  useEffect(() => {
    
    setState((prev) => ({
      ...prev,
      subGenres: currentSubGenres.sub_genres
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
    <main className="layout">
      <GenreList setGenre={setGenre} genres={genres}  /> <br></br>
      <SubGenreList setSubGenre={setSubGenre} genre={state.genre} genres={[currentSubGenres]} />
      <SongsForSubGenre subGenre={state.subGenre} songs={[currentSongs]} />
    </main>
  )

}