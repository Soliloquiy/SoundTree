import React from "react";

import "./SubGenreList.scss"


// const genreClass = classNames("genre-list__item", {
    //   "genre-list__item--selected": props.selected,
    // });




export default function SubGenreList(props) {

  if (!props.genre) {
    return []
  } else {
  return (
    <ul>
      {props.genres.map((item) => {
        return (
          <div className="App">
            <br></br>
            <li
              key={item.name}
              onClick={() => props.setSubGenre(item.name)}
              >{item.name}</li>
            { item.sub_genres.map((sub) => <div>
            <li
              key={sub}
              onClick={() => props.setSubGenre(sub)}
              >{sub}</li>
            <button>Follow</button>
            </div>)}
          </div>
        );
      })}
    </ul>
  )};
}