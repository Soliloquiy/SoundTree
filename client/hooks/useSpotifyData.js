import { useState, useEffect } from "react";
import axios from "axios";

export default function useSpotifyData() {
  // Initialize genre, user and song state
  const [state, setState] = useState({
    genres: {},
    subgenres: {},
    users: {},
    songs: {},
  });

  // Initialize useEffect for axios operations and set the state with the returned data
  useEffect(() => {
    Promise.all([
      axios.get("/api/genres"),
      axios.get("api/subgenres"),
      axios.get("/api/users"),
      axios.get("/api/songs"),
    ]).then((all) => {
      setState((prev) => ({
        ...prev,
        genres: all[0].data,
        subgenres: all[1].data,
        users: all[2].data,
        songs: all[3].data,
      }));
    });
  }, []);

  return { state, setState };
}
