export function userProfilesClass(state = [], action) {
  switch (action.type) {
    case "GET_PROFILES_CLASS":
      return action.profiles;
    default:
      return state;
  }
}
