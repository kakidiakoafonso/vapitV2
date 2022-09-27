import { ConfigReducerState, Action } from "./types";

const initialState: ConfigReducerState = {
  bannerAlreadyViewed: false,
};

function Reducer(state: ConfigReducerState = initialState, action: Action) {
  switch (action.type) {
    case "BANNERVIEWED":
      return {
        ...state,
        bannerAlreadyViewed: true,
      };
      break;
    default:
      return state;
      break;
  }
}
export default Reducer;
