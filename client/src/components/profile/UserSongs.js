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
      <SpotifyPlayer
        token={`BQBcs9BFLzHOYsW7eW5E76WWkB2j1qLiO5J-W4BKq5wZeJJc1OUrzO3q3wjRtRbpfHNSb4-OnPYUXlQVFJ4EcOgPt4EgL_Mu7atFbhUIEJAilH_8YYd-LpXZh_vRcZRMjpdsggEUp8YvEboRKJ8Gl6Zo8CXRKLuzGx5kMNYqeWCql8sT9kMcrzFci9g`}
        uris={props.uris}
      />
    </div>
  );
}
