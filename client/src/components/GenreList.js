import React from "react";

import "./GenreList.scss"


// const genreClass = classNames("genre-list__item", {
    //   "genre-list__item--selected": props.selected,
    // });




export default function GenreList(props) {

  return (
    <aside className="sidebar">
      <nav className="side-nav">
        <ul >
          {props.genres.map((item) => {
            return (
              <div className="App">
                <li
                  key={item.id}
                  className="genre-list__item"
                  // selected={item.name === state.genre}
                  onClick={() => props.setGenre(item.name)}
                >
                  <span class="text--regular">{item.name}</span>
                  </li>
              </div>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
