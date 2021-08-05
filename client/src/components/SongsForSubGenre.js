import React from "react";


// const genreClass = classNames("genre-list__item", {
    //   "genre-list__item--selected": props.selected,
    // });




export default function SongsForSubGenre(props) {
  
  console.log(props.subGenre)
  console.log(props.songs)

  if (!props.subGenre) {
    return []
  } else
  return (
    <ul>
      {props.songs.map((item) => {
        return (
          <div className="App">
            <br></br>
            <li key={item.id}>{item.name}</li>
            { item.songs.map((song) => 
            <div>
            <li key={song.id}>
              Song Name: {song.name} 
              Song Artist: {song.artist} 
              Song Album: {song.album} 
            </li>
            </div>)}
          </div>
        );
      })}
    </ul>
  );
}