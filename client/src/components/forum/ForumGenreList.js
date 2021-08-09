import React from "react";
import "./ForumGenreList.scss"


// const genreClass = classNames("genre-list__item", {
    //   "genre-list__item--selected": props.selected,
    // });




export default function ForumGenreList(props) {

  return (
    <aside className="sidebar-forum">
      <nav className="side-nav-forum">
        <ul >
          {props.genres.map((item) => {
            return (
              <div key={item.id} className="forum-genre">
                <li
                  key={item.id+1}
                  className="cyberpunk glitched"
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
