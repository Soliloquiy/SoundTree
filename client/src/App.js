import React, { Component } from "react";
import axios from "axios";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Click to to load data!",
    };
  }

  fetchData = () => {
    return axios
      .get("/api/genres") // You can simply make your requests to "/api/whatever you want"
      .then((response) => {
        console.log("Genres", response.data); // The entire response from the Rails API
        return response.data;

        // this.setState({
        //   message: response.data.message,
        // });
      });
  };

  render() {
    return (
      <div className="App">
        <h1>{this.state.message}</h1>
        <button onClick={this.fetchData}>Fetch Data</button>
      </div>
    );
  }
}

export default App;
