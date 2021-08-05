import axios from "axios";

export default function useUserAuthentication() {

  function registerUser(username, email, password, avatar) {

    const registerParams = {
      "user": {
        username,
        email,
        password,
        avatar
      }
    };

    console.log("registerParams", registerParams)

    return axios
      .post(`/api/users.json`, registerParams)
      .then(() => {
        console.log("user create sent to rails")
      })
  };

  function userLogin(email, password) {

    const loginParams = {
      email,
      password
    };

    console.log("loginParams", loginParams)

    return axios
      .post(`/api/login.json`, loginParams)
      .then((res) => {
        console.log(`login result: ${res.data}`)
        return res.data
      })
  };

  return { registerUser, userLogin };
};
