import React from "react";
import "./UserGenreList.scss";

export default function UserGenreList(props) {
  return (
    <aside className="sidebar">
      <nav className="side-nav">
        <ul>
          {props.subgenres.map((subgenre) => {
            return (
              <div className="user-genre-list">
                <li
                  key={subgenre}
                  className="genre-list__item"
                  onClick={() => {
                    props.setSubGenre(subgenre);
                    props.getSongsByGenre(subgenre);
                    props.getSongURIs(subgenre);
                  }}
                >
                  <h3 class="text--regular">{subgenre}</h3>
                  <button
                    className="unfollow-button"
                    onClick={() => {
                      props.setSubGenre(subgenre);
                      props.deleteUserGenre(subgenre);
                    }}
                  >
                    Unfollow
                  </button>
                </li>
              </div>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
