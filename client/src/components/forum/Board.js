import React from "react";
import Form from "./Form";
import Post from "./Post";
import ForumGenreLinks from "./ForumGenreLinks";

import "./Board.scss";


const genres = [
  {
    id: 1,
    name: "Metal",
    sub_genres: [
      {id: 1, name:"Metal", 
      sub_genre_posts: [

        {id: 1, user_id: 1, subgenre_id: 1, comment: "I", like_count: 5, avatar: "https://img.icons8.com/ios/452/spongebob-squarepants.png"},
        {id: 2, user_id: 1, subgenre_id: 1, comment: "Am", like_count: 20, avatar: "https://img.icons8.com/ios/452/spongebob-squarepants.png"},
        {id: 3, user_id: 1, subgenre_id: 1, comment: "Testing", like_count: 6, avatar: "https://img.icons8.com/ios/452/spongebob-squarepants.png"},
        {id: 4, user_id: 1, subgenre_id: 1, comment: "This", like_count: 7, avatar: "https://img.icons8.com/ios/452/spongebob-squarepants.png"},
        {id: 5, user_id: 1, subgenre_id: 1, comment: "Thing", like_count: 10, avatar: "https://img.icons8.com/ios/452/spongebob-squarepants.png"},
        {id: 6, user_id: 1, subgenre_id: 1, comment: "Out", like_count: 12, avatar: "https://img.icons8.com/ios/452/spongebob-squarepants.png"}


      ]},
      {id: 2, name:"Metal 2",
      sub_genre_posts: [

        {id: 1, user_id: 2, subgenre_id: 2, comment: "Hope", like_count: 5, avatar: "https://upload.wikimedia.org/wikipedia/en/thumb/3/33/Patrick_Star.svg/220px-Patrick_Star.svg.png"},
        {id: 2, user_id: 2, subgenre_id: 2, comment: "This", like_count: 20, avatar: "https://upload.wikimedia.org/wikipedia/en/thumb/3/33/Patrick_Star.svg/220px-Patrick_Star.svg.png"},
        {id: 3, user_id: 2, subgenre_id: 2, comment: "Works", like_count: 6, avatar: "https://upload.wikimedia.org/wikipedia/en/thumb/3/33/Patrick_Star.svg/220px-Patrick_Star.svg.png"},
        {id: 4, user_id: 2, subgenre_id: 2, comment: "Getting", like_count: 7, avatar: "https://upload.wikimedia.org/wikipedia/en/thumb/3/33/Patrick_Star.svg/220px-Patrick_Star.svg.png"},
        {id: 5, user_id: 2, subgenre_id: 2, comment: "Excited", like_count: 10, avatar: "https://upload.wikimedia.org/wikipedia/en/thumb/3/33/Patrick_Star.svg/220px-Patrick_Star.svg.png"},
        {id: 6, user_id: 2, subgenre_id: 2, comment: "Now", like_count: 12, avatar: "https://upload.wikimedia.org/wikipedia/en/thumb/3/33/Patrick_Star.svg/220px-Patrick_Star.svg.png"}


      ]},
      {id: 3, name:"Metal 3"},
      {id: 4, name:"Metal 4"},
      {id: 5, name:"Metal 5"},
      {id: 6, name:"Metal 6"},
      {id: 7, name:"Metal 7"}
  ]},
  {
    id: 2,
    name: "Rock",
    sub_genres: [
      {id: 1, name:"Rock"},
      {id: 2, name:"Rock 2"},
      {id: 3, name:"Rock 3"},
      {id: 4, name:"Rock 4"},
      {id: 5, name:"Rock 5"},
      {id: 6, name:"Rock 6"},
      {id: 7, name:"Rock 7"}
  ]},
  {
    id: 3,
    name: "Country",
    sub_genres: [
      {id: 1, name:"Country"},
      {id: 2, name:"Country 2"},
      {id: 3, name:"Country 3"},
      {id: 4, name:"Country 4"},
      {id: 5, name:"Country 5"},
      {id: 6, name:"Country 6"},
      {id: 7, name:"Country 7"}
  ]},
  {
    id: 4,
    name: "HipHop",
    sub_genres: [
      {id: 1, name:"HipHop"},
      {id: 2, name:"HipHop 2"},
      {id: 3, name:"HipHop 3"},
      {id: 4, name:"HipHop 4"},
      {id: 5, name:"HipHop 5"},
      {id: 6, name:"HipHop 6"},
      {id: 7, name:"HipHop 7"}
  ]}
]

export default function Board(props) {
  // return (
  //   <main className="post-board">
  //     <section>
  //       <Form />
  //     </section>
  //     <section>
  //       <Post />
  //       <Post />
  //     </section>
  //   </main>
  // )

  return (
    <div>
      <ForumGenreLinks userId={props.currentUserId} genres={genres}/>
    </div>
    
  )
};