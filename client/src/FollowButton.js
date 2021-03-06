import React from "react";
import axios from "axios";
import "./FollowButton.scss"



export default function FollowButton(props) {

  // const [state, setState] = useState({
  //   like_count: props.post.like_count
  // })

  // const sendFollow = (follow) => setState({ ...state, like_count });

  function sendFollow(user_id, subgenre_id) {

    const data = {
      "usergenre": {
        user_id,
        subgenre_id
      }  
    };
              
    console.log("data: ", data)
    
    return axios
      .post(`/api/follow.json`, data)
      .then(() => {  
        console.log("post create sent to rails")
        props.setFollow(props.subgenre_id)

      })
  }

  return (
    <div className="follow">
      <button className="follow-button" onClick={() => {sendFollow(props.userId, props.subgenre_id)}} > 
        Follow 
      </button>
    </div>
  );
}