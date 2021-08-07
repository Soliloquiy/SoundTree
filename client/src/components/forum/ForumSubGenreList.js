import React from "react";


// const genreClass = classNames("genre-list__item", {
    //   "genre-list__item--selected": props.selected,
    // });




export default function ForumSubGenreList(props) {

  if (!props.genre) {
    return []
  } else {
  return (
    <ul>
      {props.genres.map((item) => {
        return (
          <div className="forum-sub-genre">
            <br></br>
            { item.subgenres.map((subgenre) => <div>
            <li
              key={subgenre.id}
              className="forum-sub-genre__name"
              onClick={() => props.setSubGenre(subgenre.name)}
            >
            {subgenre.name}
            </li>
            
            </div>)}
            
          </div>
        );
      })}
    </ul>
  )};
}