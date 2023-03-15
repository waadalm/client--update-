import api from "../../utils/api";
import setAuthToken from "../../utils/setAuthToken";
import { LOGIN_SUCCESS, REGISTER_SUCCESS, USER_LOADED } from "../types";

export const loadUser = () => async (dispatch) => {
  setAuthToken(localStorage.getItem("token"));
  await api
    .get("/auth")
    .then((res) => {
      //we will get the user details, then rcvd user detail we need to assign to user deom our reducer.
      dispatch({ type: USER_LOADED, payload: res.data });
    })
    .catch();
};
//rxaction
export const login = (data) => async (dispatch) => {
  await api
    .post("/auth", data)
    .then((res) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data.token,
      });
      //load the user detail
      //we can consume the action inside the another action but needs to be called using dispatch.
      //loadUser();
      dispatch(loadUser());
    })
    .catch();
};

export const register = (data) => async (dispatch) => {
  //perform the rest call
  await api
    .post("/users", data)
    .then((res) => {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data.token,
      });
      dispatch(loadUser());
    })
    .catch((err) => {});
};
