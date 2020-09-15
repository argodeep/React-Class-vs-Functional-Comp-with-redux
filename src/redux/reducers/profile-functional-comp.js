export function userProfilesFunctional(state = [], action) {
  switch (action.type) {
    case "GET_PROFILES_FUNCTIONAL":
      return action.profiles;
    default:
      return state;
  }
}
