import { GET_PROFILES_FUNCTIONAL, GET_PROFILES_CLASS } from "./types";

export function getProfilesFunctional(profiles) {
  return {
    type: GET_PROFILES_FUNCTIONAL,
    profiles
  };
}

export function getProfilesClass(profiles) {
  return {
    type: GET_PROFILES_CLASS,
    profiles
  };
}
