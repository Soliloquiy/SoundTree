import React from "react";
import "./UserGenreList.scss";

export default function UserGenreList(props) {
  return (
    <div>
      <ul>
        {props.subgenres.map((subgenre) => {
          return (
            <div className="App">
              <li
                key={subgenre}
                className="genre-list__item"
                onClick={() => {
                  props.setSubGenre(subgenre);
                  props.getSongsByGenre(subgenre);
                }}
              >
                <li class="text--regular">{subgenre}</li>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
