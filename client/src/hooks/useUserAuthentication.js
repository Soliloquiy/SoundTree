import { useState, useEffect } from "react";
import axios from "axios";

export default function useUserAuthentication() {
  
  function registerUser(username, email, password, avatar) {

    const data = 
      {"user": {
          username,
          email,
          password,
          avatar
        }
        
      };

    console.log("data: ", data)

    return axios
      .post(`/api/users.json`, data)
      .then(() => {
        console.log("user create sent to rails")
      })
  }

  return { registerUser };
}
