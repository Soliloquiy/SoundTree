import React from "react";
import SpotifyPlayer from "react-spotify-web-playback";
//import "./UserSongs.scss";

export default function UserSongs(props) {
  return (
    <div>
      <ul>
        {props.songs.map((song) => {
          return (
            <div className="App">
              <li key={song}>
                <li class="text--regular">{song}</li>
              </li>
            </div>
          );
        })}
      </ul>
      <SpotifyPlayer token={``} uris={props.uris} />
    </div>
  );
}
