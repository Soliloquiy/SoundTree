import React from "react";


// const genreClass = classNames("genre-list__item", {
    //   "genre-list__item--selected": props.selected,
    // });




export default function ForumGenreList(props) {

  return (
    <aside className="sidebar">
      <nav className="side-nav">
        <ul >
          {props.genres.map((item) => {
            return (
              <div key={item.id} className="forum-genre">
                <li
                  key={item.id+1}
                  className="genre-list__item"
                  // selected={item.name === state.genre}
                  onClick={() => props.setGenre(item.name)}
                >
                  <span key={item.id+2} className="text--regular">{item.name}</span>
                  </li>
              </div>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
