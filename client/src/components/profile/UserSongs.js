import React from "react";
import "./UserSongs.scss";

export default function UserSongs(props) {
  return (
    <div>
      <ul>
        {props.songs.map((song) => {
          return (
            <div className="App">
              <li key={song} className="song-list__item">
                <li class="text--regular">{song}</li>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
