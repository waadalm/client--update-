//getCurrentProfile: to get the current profile of the user.

import api from "../../utils/api";
import setAuthToken from "../../utils/setAuthToken";
import { GET_PROFILE, PROFILE_ERROR } from "../types";
//createProfile action
//it should work for creating a new profile or should help us for editing the profile.
export const createProfile =
  (data, edit = false) =>
  async (dispatch) => {
    //rest call
    setAuthToken(localStorage.getItem("token"));
    api
      .post("/profile")
      .then((res) => {
        dispatch({ type: GET_PROFILE, payload: res.data });
      })
      .catch();
  };
//rxaction
export const getCurrentProfile = () => async (dispatch) => {
  setAuthToken(localStorage.getItem("token"));
  await api
    .get("/profile/me")
    .then()
    .catch((err) => {
      console.log(err);
      dispatch({ type: PROFILE_ERROR, payload: err.response.data.msg });
    });
};
