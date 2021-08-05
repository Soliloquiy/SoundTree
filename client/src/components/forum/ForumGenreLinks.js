import React from "react";
import { Switch, Route, Link } from 'react-router-dom'
import ForumSubGenreLinks from "./ForumSubGenreLinks";

// const genreClass = classNames("genre-list__item", {
    //   "genre-list__item--selected": props.selected,
    // });




export default function ForumGenreLinks(props) {
  return(
    <Switch>

      <Route path="/forum/:id" render={({ match }) => {
          const id = parseInt(match.params.id)
          const foundGenre = props.genres.find(genre => genre.id === id)
          console.log(foundGenre)
          return <ForumSubGenreLinks userId={props.userId} genres={foundGenre} />
        }} />

      <Route path="/forum">
        <ul>
          {props.genres.map((item) => {
            return (
              <div className="App">
                <li
                    key={item.id}
                    className="genre-list__item"
                    // selected={item.name === state.genre}
                    // onClick={() => props.setGenre(item.name)}
                  >
                    <Link to={`/forum/${item.id}`}> {item.name} </Link>
                  </li>
              </div>
            );
          })}
        </ul>
      </Route>


    </Switch>
  )


  
}