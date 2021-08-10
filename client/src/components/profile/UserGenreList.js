import React from "react";
import "./UserGenreList.scss";

export default function UserGenreList(props) {
  return (
    <aside className="user-sidebar">
      <nav className="user-side-nav">
        <ul>
          {props.subgenres.map((subgenre) => {
            return (
              <div className="user-genre-list">
                <li
                  key={subgenre}
                  className="user-subgenre-list glitched"
                  onClick={() => {
                    props.setSubGenre(subgenre);
                    props.getSongsByGenre(subgenre);
                    props.getSongURIs(subgenre);
                  }}
                >
                  <span class="sub-genre-names">{subgenre}</span>
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
