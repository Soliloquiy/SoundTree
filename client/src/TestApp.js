
import React, { Component } from 'react';
import './App.css';
import Application from './Application';

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


    return (
      <main className="layout">
        <Application />
      </main>
    );
  }
}

export default App;
