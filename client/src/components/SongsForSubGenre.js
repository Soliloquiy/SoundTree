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
            <li key={item.name}>{item.name}</li>
            { item.songs.map((songs) => <div>
            <li key={songs}>{songs}</li>
            </div>)}
          </div>
        );
      })}
    </ul>
  );
}