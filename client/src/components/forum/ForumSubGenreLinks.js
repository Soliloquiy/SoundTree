import React from "react";
import { Switch, Route, Link } from 'react-router-dom'
import ForumLinkPosts from "./ForumLinkPosts";

// const genreClass = classNames("genre-list__item", {
    //   "genre-list__item--selected": props.selected,
    // });




export default function ForumSubGenreLinks(props) {


  return (
    <Switch>

      <Route path="/forum/:id/:id" render={({ match }) => {
          const id = parseInt(match.params.id)
          const foundSubGenre = props.genres.sub_genres.find(subGenre => subGenre.id === id)
          console.log(foundSubGenre)
          return <ForumLinkPosts subGenres={foundSubGenre} />
          }} />


      <Route path="/forum/:id">
        <ul>
          {props.genres.sub_genres.map((item) => {
            return (
              <div className="App">
                <li
                    key={item.id}
                    className="genre-list__item"
                    // selected={item.name === state.genre}
                    // onClick={() => props.setGenre(item.name)}
                  >
                    <Link to={`/forum/${props.genres.id}/${item.id}`}> {item.name} </Link>
                  </li>
              </div>
            );
          })}
        </ul>
      </Route>
    </Switch>
  );
}