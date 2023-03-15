import api from "./api";

const setAuthToken = (token) => {
  if (token) {
    //add the token
    api.defaults.headers.common["x-auth-token"] = token;
    localStorage.setItem("token", token);
  } else {
    //your axios will have token (maty be situation)
    delete api.defaults.headers.common;
    //removing token from localstorage.
    localStorage.removeItem("token");
  }
};

export default setAuthToken;
