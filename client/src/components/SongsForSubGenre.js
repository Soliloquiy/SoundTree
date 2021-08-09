import React from "react";
import "./SongsForSubGenre.scss"


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
          <div className="discover-music-list">
            <br></br>
            <li key={item.id}>
              <span className="neon">
                {item.name}
              </span>
            </li>
            { item.songs.map((song) => 
            <div className="song-list">
            <li key={song.id}>
              <span className="song-name">☢ {song.name} </span>
              <span className="artist-name"> Artist: </span> {song.artist}
              <span className="album-name"> Album: </span> {song.album}
            </li>
            </div>)}
          </div>
        );
      })}
    </ul>
  );
}