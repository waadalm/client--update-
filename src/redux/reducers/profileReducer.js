//rxreducer
import { GET_PROFILE, PROFILE_ERROR } from "../types";

const initialState = {
  profile: null, // to hold current user profile.
  profiles: [], // to hold all peofiles.
  error: {},
  loading: true,
  repos: [], //to hold all github respositories.
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_PROFILE:
      //to retrieve, update,create.
      return { ...state, profile: payload, loading: false };
    case PROFILE_ERROR:
      return { ...state, error: payload, loading: false, profile: null };

    default:
      return state;
  }
};
