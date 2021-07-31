import React, {useState} from "react";

import "./GenreList.scss"


// const genreClass = classNames("genre-list__item", {
    //   "genre-list__item--selected": props.selected,
    // });




export default function GenreList(props) {
  
  const [state, setState] = useState({
    genre: "",
    genres: [],
  })

  const setGenre = (genre) => setState({...state, genre})
  
  return (
    <ul>
      {props.genres.map((item) => {
        return (
          <div className="App">
             <li
                class="genre-list__item"
                onClick={() => setGenre(item.name)}
              >
                <h2 class="text--regular">{item.name} fi</h2>
              </li>
          </div>
        );
      })}
    </ul>
  );
}
