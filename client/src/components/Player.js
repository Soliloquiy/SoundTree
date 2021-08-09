import React from "react";
import SpotifyPlayer from "react-spotify-web-playback";

export default function Player(props) {
  return (
    <SpotifyPlayer
      styles={{
        activeColor: "blue",
        altColor: "green",
        bgColor: "brown",
        color: "blue",
        sliderColor: "green",
        sliderTrackColor: "grey",
        trackArtistColor: "green",
        trackNameColor: "grey",
      }}
      token={props.token}
      uris={props.uris}
    />
  );
}
