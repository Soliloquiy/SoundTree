import { useEffect, useState } from "react";
//import { Switch, Route, Link } from "react-router-dom";
import React from "react";
import axios from "axios";
import UserSongs from "./UserSongs";
import UserGenreList from "./UserGenreList";
import "./Profile.scss";

export default function Profile(props) {
  const [state, setState] = useState({
    subgenre: "",
    usergenresongs: [],
  });

  useEffect(() => {
    axios.get("api/profile.json").then((response) => {
      setState((prev) => ({
        ...prev,
        usergenresongs: response.data.filter(
          (usergenre) => usergenre.user_id === props.id
        ),
      }));
    });
  }, []);

  const setSubGenre = (subgenre) => setState({ ...state, subgenre });

  const userGenres = [];
  const songsByGenre = {};
  for (const song in state.usergenresongs) {
    userGenres.push(state.usergenresongs[song].subgenre.name);
    const songList = [...state.usergenresongs[song].subgenre.songs];
    songsByGenre[state.usergenresongs[song].subgenre.name] = songList;
  }

  function getSongsByGenre(genre) {
    const userSongs = [];
    for (const song in songsByGenre[genre]) {
      let songs = [
        `Name: ${songsByGenre[genre][song].name}  `,
        `Artist: ${songsByGenre[genre][song].artist}  `,
        `Album: ${songsByGenre[genre][song].album}  `,
      ];
      userSongs.push(songs);
    }
    return userSongs;
  }

  return (
    <main className="user-profile">
      <UserGenreList
        subgenre={state.subgenre}
        setSubGenre={setSubGenre}
        getSongsByGenre={getSongsByGenre}
        subgenres={userGenres}
      />
      <UserSongs
        setSubGenre={setSubGenre}
        subgenre={state.subgenre}
        songs={getSongsByGenre(state.subgenre)}
      />
    </main>
  );
}
