import React, { useState, useEffect } from 'react';
import './App.css';
import GenreList from './GenreList';
import SubGenreList from './SubGenreList';

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

  const [state, setState] = useState({
    genre: "",
    genres: genres,
    subGenres: []
  })

  const setSubGenre = (subGenres) => setState((prev) => ({
    ...prev,
    subGenres: subGenres
  }));

  

  // const setGenre = (genre) => setState({...state, genre})

  function getSubGenresWithGenre(state, genreName) {
    const foundGenre = state.genres.filter((genre) => genre.name === genreName)[0];
  
    if (!genreName || !foundGenre) {
      return [];
    }
  
    const subGenres = foundGenre;
    
    
    return subGenres
  }

  const currentSubGenres = getSubGenresWithGenre(state, state.genre)
  useEffect(() => {
    
    setState((prev) => ({
      ...prev,
      subGenres: currentSubGenres.sub_genres
    }))
  }, [state.genre]);

  const setGenre = (genre) => setState({ ...state, genre });
  console.log(state.subGenres)

  

  return (
    <main className="layout">
      <GenreList setGenre={setGenre} genres={genres}  /> <br></br>
      <SubGenreList genre={state.genre} genres={[currentSubGenres]} />
    </main>
  )

}