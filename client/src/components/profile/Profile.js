import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";
import UserSongs from "./UserSongs";
import UserGenreList from "./UserGenreList";
import "./Profile.scss";
const SpotifyWebApi = require("spotify-web-api-node");

export default function Profile(props) {
  const userID = props.id;
  /****Define useState for the current user******/
  const [state, setState] = useState({
    subgenre: "",
    uri: 0,
    usergenresongs: [],
  });
  /****Retrieve all of the subgenres and songs associated with the current user******/
  useEffect(() => {
    axios.get("api/profile.json").then((response) => {
      setState((prev) => ({
        ...prev,
        usergenresongs: response.data.filter(
          (usergenre) => usergenre.user_id === userID
        ),
      }));
    });
  }, []);

  /****get the Spotify token based on client id and client secret******/
  const { REACT_APP_CLIENTID, REACT_APP_CLIENTSECRET } = process.env;
  const [token, setToken] = useState("");
  const spotifyAuth = btoa(`${REACT_APP_CLIENTID}:${REACT_APP_CLIENTSECRET}`);
  useEffect(() => {
    axios("https://accounts.spotify.com/api/token", {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${spotifyAuth}`,
      },
      data: "grant_type=client_credentials",
      method: "POST",
    })
      .then((tokenresponse) => {
        //console.log("NEW TOKEN ", tokenresponse.data.access_token); //.access_token);
        setToken(tokenresponse.data.access_token);
      })
      .catch((error) => console.log(error));
  }, []);

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

  function getSongURIs(genre) {
    const URIS = [];
    for (const song in songsByGenre[genre]) {
      URIS.push(songsByGenre[genre][song].uri);
    }
    return URIS;
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
    const user_id = userID;
    for (const userGenre in state.usergenresongs) {
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

  // // credentials are optional
  // const spotifyApi = new SpotifyWebApi({
  //   clientId: REACT_APP_CLIENTID,
  //   clientSecret: REACT_APP_CLIENTSECRET,
  //   redirectUri: "http:localhost/3000/api/profile",
  // });
  // console.log(spotifyApi.getartists);

  //spotifyApi.se((tAccessToken(token);
  console.log(getSongURIs(state.subgenre)[0]);
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
        getSongURIs={getSongURIs}
      />
      <UserSongs
        setSubGenre={setSubGenre}
        subgenre={state.subgenre}
        songs={getSongsByGenre(state.subgenre)}
        uris={getSongURIs(state.subgenre)}
      />
    </main>
  );
}
