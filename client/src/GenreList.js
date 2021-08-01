import React from "react";

import "./GenreList.scss"


// const genreClass = classNames("genre-list__item", {
    //   "genre-list__item--selected": props.selected,
    // });




export default function GenreList(props) {


  return (
    <ul>
      {props.genres.map((item) => {
        return (
          <div className="App">
             <li
                key={item.name}
                className="genre-list__item"
                // selected={item.name === state.genre}
                // onClick={() => setGenre(props.name)}
              >
                <h2 class="text--regular">{item.name}</h2>
              </li>
          </div>
        );
      })}
    </ul>
  );
}
