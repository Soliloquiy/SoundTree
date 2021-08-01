import React, { useState } from 'react';
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

  // const setGenre = (genre) => setState({...state, genre})

  function getSubGenresForGenre(state, genreName) {
    const foundGenre = state.genres.filter((genre) => genre.name === genreName)[0];
  
    if (!genreName || !foundGenre) {
      return [];
    }
  
    const subGenres = foundGenre.sub_genres;
    console.log(subGenres)
  
    return subGenres.map((subName) => state.subGenres[subName]);
  }

  console.log("here")
  console.log(state.genres)
  console.log(state.subGenres)
  getSubGenresForGenre(state, "Metal")
  

  return (
    <main className="layout">
      <GenreList genres={genres} /> <br></br>
      <SubGenreList genres={genres} />
    </main>
  )

}