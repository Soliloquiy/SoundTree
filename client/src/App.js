import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Application from './Application';

export default function App() {
  return (
    <Router>
      <div>
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav> */}

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <Application />
          </Route>

          <Route path="/login">

          </Route>

          <Route path="/registration">
          <Application />
          </Route>

          <Route path="/profile">

          </Route>

          <Route path="/forum">

          </Route>
        </Switch>
      </div>
    </Router>
  );
}