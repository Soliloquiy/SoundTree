import React, { Component } from "react";
import "./App.css";
import GenreList from "./GenreList";
import SubGenreList from "./SubGenreList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Click the button to load data!",
    };
  }

  // Genre Component:

  // render() {

  //   const dayClass = classNames("day-list__item", {
  //     "day-list__item--selected": props.selected,
  //     "day-list__item--full": props.spots === 0,
  //   });

  //   return (
  //     <div className="App">
  //        <li
  //           data-testid="day"
  //           className={dayClass}
  //           onClick={() => props.setDay(props.name)}
  //         >
  //           <h2 className="text--regular">{props.name}</h2>
  //           <h3 className="text--light">{formatSpots(props.spots)}</h3>
  //         </li>
  //     </div>
  //   );
  // }

  render() {
    const genres = [
      {
        name: "Metal",
        sub_genres: [
          "Metal 1",
          "Metal 2",
          "Metal 2",
          "Metal 4",
          "Metal 5",
          "Metal 6",
        ],
      },
      {
        name: "Rock",
        sub_genres: [
          "Rock 1",
          "Rock 2",
          "Rock 2",
          "Rock 4",
          "Rock 5",
          "Rock 6",
        ],
      },
      {
        name: "Country",
        sub_genres: [
          "Country 1",
          "Country 2",
          "Country 2",
          "Country 4",
          "Country 5",
          "Country 6",
        ],
      },
      {
        name: "HipHop",
        sub_genres: [
          "HipHop 1",
          "HipHop 2",
          "HipHop 2",
          "HipHop 4",
          "HipHop 5",
          "HipHop 6",
        ],
      },
    ];

    return (
      <main className="layout">
        <GenreList genres={genres} /> <br></br>
        <SubGenreList genres={genres} />
      </main>
    );
  }
}

export default App;
