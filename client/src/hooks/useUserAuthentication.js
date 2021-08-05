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

  return { registerUser };
};
