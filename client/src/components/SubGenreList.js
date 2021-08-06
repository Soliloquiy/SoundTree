import React from "react";
import FollowButton from "../FollowButton"
import "./SubGenreList.scss"


// const genreClass = classNames("genre-list__item", {
    //   "genre-list__item--selected": props.selected,
    // });




export default function SubGenreList(props) {

  if (!props.genre) {
    return []
  } else {
  return (
    <ul>
      {props.genres.map((item) => {
        return (
          <div className="App">
            <br></br>
            { item.subgenres.map((subgenre) => <div>
            <li
              key={subgenre.id}
              onClick={() => props.setSubGenre(subgenre.name)}
            >
            {subgenre.name}
            </li>
            {props.userId ? (
            <FollowButton userId={props.userId} subgenre_id={subgenre.id} />
            ) : (
              <div> </div>
            )}
            
            </div>)}
          </div>
        );
      })}
    </ul>
  )};
}