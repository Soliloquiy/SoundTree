import React from "react";

import "./SubGenreList.scss"


// const genreClass = classNames("genre-list__item", {
    //   "genre-list__item--selected": props.selected,
    // });




export default function SubGenreList(props) {
  return (
    <ul>
      {props.genres.map((item) => {
        return (
          <div className="App">
            <br></br>
            <li>{item.name}</li>
            { item.sub_genres.map((sub) => <div>
            <li>{sub}</li>
            <button>Follow</button>
            </div>)}
          </div>
        );
      })}
    </ul>
  );
}