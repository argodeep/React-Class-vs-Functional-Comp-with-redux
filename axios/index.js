import axios from "axios";
import { getProfiles } from "../redux/actions";

const BASE_API = "https://randomuser.me/api/";

export function getUseProfiles() {
  return function (dispatch) {
    axios
      .get(BASE_API + `?inc=name,phone&results=20&nat=us`)
      .then((response) => {
        console.log(dispatch);
        dispatch(getProfiles(response.data.results));
      })
      .catch((err) => {
        console.log(err);
        dispatch(getProfiles([]));
      });
  };
}
