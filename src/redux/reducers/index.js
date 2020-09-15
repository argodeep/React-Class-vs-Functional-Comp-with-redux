import { userProfilesClass } from "./profile-class-comp";
import { userProfilesFunctional } from "./profile-functional-comp";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  userProfilesClass,
  userProfilesFunctional
});

export default allReducers;
