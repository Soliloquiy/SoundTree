import React from "react";
import Form from "./Form";
import Post from "./Post";

import "./Board.scss";

export default function Board(props) {
  return (
    <main className="post-board">
      <section>
        <Form />
      </section>
      <section>
        <Post />
        <Post />
      </section>
    </main>
  )
};