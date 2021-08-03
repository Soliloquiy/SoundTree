import { useState, useEffect } from "react";
import axios from "axios";

export default function useSpotifyData() {
  // Initialize day, days, appointments and interviewers state
  const [state, setState] = useState({
    genres: {},
    users: {},
    recommendations: {},
  });

  // Initialize useEffect for axios operations and set the state with the returned data
  useEffect(() => {
    Promise.all([
      axios.get("/api/genres"),
      axios.get("/api/users"),
      axios.get("/api/recommendations"),
    ]).then((all) => {
      setState((prev) => ({
        ...prev,
        genres: all[0].data,
        users: all[1].data,
        recommendations: all[2].data,
      }));
    });
  }, []);

  return { state, setState };
}
