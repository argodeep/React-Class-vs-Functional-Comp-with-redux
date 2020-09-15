import axios from "axios";
import { getProfilesFunctional, getProfilesClass } from "../redux/actions";

const BASE_API = "https://randomuser.me/api/";

export function getUserProfilesFunctional() {
  return (dispatch) => {
    axios
      .get(BASE_API + `?inc=name,phone&results=20&nat=us`)
      .then((response) => {
        dispatch(getProfilesFunctional(response.data.results));
      })
      .catch((err) => {
        dispatch(getProfilesFunctional([]));
      });
  };
}

export function getUserProfilesClass() {
  return (dispatch) => {
    axios
      .get(BASE_API + `?inc=name,phone&results=20&nat=us`)
      .then((response) => {
        dispatch(getProfilesClass(response.data.results));
      })
      .catch((err) => {
        dispatch(getProfilesClass([]));
      });
  };
}
