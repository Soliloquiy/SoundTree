import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";
import UserSongs from "./UserSongs";
import UserGenreList from "./UserGenreList";
import "./Profile.scss";

export default function Profile(props) {
  /****Define useState for the current user******/
  const [state, setState] = useState({
    subgenre: "",
    usergenresongs: [],
  });
  /****Retrieve all of the subgenres and songs associated with the current user******/
  useEffect(() => {
    axios.get("api/profile.json").then((response) => {
      setState((prev) => ({
        ...prev,
        usergenresongs: response.data.filter(
          (usergenre) => usergenre.user_id === 1
        ),
      }));
    });
  }, []);

  console.log(state.usergenresongs);

  const userGenres = []; // Genres that the current user follows
  const userGenresWithID = []; // Genres that the current user follows with subgenre ids
  const songsByGenre = {}; // All of the songs associated with the subgenres that the current user follows
  for (const song in state.usergenresongs) {
    userGenresWithID.push([
      state.usergenresongs[song].subgenre.name,
      state.usergenresongs[song].subgenre_id,
    ]);
    userGenres.push(state.usergenresongs[song].subgenre.name);
    const songList = [...state.usergenresongs[song].subgenre.songs];
    songsByGenre[state.usergenresongs[song].subgenre.name] = songList;
  }

  /****Set the state for the current subgenre ******/
  const setSubGenre = (subgenre) => setState({ ...state, subgenre });

  /****Get the songs for the current subgenre ******/
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

  /****Get the subgenreid for the current subgenre ******/
  function getSubGenreID(genrename) {
    let subgenreid = 0;
    for (const genre of userGenresWithID) {
      if (genre[0] === genrename) {
        subgenreid = genre[1];
      }
    }
    return subgenreid;
  }

  /***FInd the usergenre id for the current user and subgenre */
  function getUserGenreID(genre) {
    const subgenre_id = getSubGenreID(genre);
    const user_id = 1;
    for (const userGenre in state.usergenresongs) {
      console.log("USERID ", state.usergenresongs[userGenre].user_id);
      console.log("GENREID ", state.usergenresongs[userGenre].subgenre_id);
      if (
        state.usergenresongs[userGenre].user_id === user_id &&
        state.usergenresongs[userGenre].subgenre_id === subgenre_id
      ) {
        return state.usergenresongs[userGenre].id;
      }
    }
  }

  /****Delete the currently selected subgenre from the usergenres table for the current user******/
  function deleteUserGenre(genre) {
    const usergenre_id = getUserGenreID(genre);
    return axios.post(`/api/follow/${usergenre_id}`, usergenre_id).then(() => {
      console.log("user genre deleted");
    });
  }

  /****Render the HTML for the current user profile******/
  return (
    <main className="layout">
      <UserGenreList
        subgenre={state.subgenre}
        subgenreId={getSubGenreID(state.genre)}
        setSubGenre={setSubGenre}
        getSongsByGenre={getSongsByGenre}
        subgenres={userGenres}
        deleteUserGenre={deleteUserGenre}
      />
      <UserSongs
        setSubGenre={setSubGenre}
        subgenre={state.subgenre}
        songs={getSongsByGenre(state.subgenre)}
      />
    </main>
  );
}
