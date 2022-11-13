import { ConfigReducerState, Action } from "./types";
const initialState: ConfigReducerState = {
  bannerAlreadyViewed: [],
};

function Reducer(
  state: ConfigReducerState = initialState,
  action: Action
): ConfigReducerState {
  switch (action.type) {
    case "ADD":
      return { bannerAlreadyViewed: [] };
      break;
    default:
      return state;
      break;
  }
}
export default Reducer;
