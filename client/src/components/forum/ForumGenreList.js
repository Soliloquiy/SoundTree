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
              <div className="forum-genre">
                <li
                  key={item.id}
                  className="genre-list__item"
                  // selected={item.name === state.genre}
                  onClick={() => props.setGenre(item.name)}
                >
                  {console.log(item.name)}
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
