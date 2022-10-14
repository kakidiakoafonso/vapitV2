import { Action } from "./types";
const initialState: IAdverts[] = [];

function Reducer(state: IAdverts[] = initialState, action: Action) {
  switch (action.type) {
    case "SET_ADVERT":
      return action.payload;
      break;
    case "GET_SMALL_ADVERT":
      return state.filter((e) => e.height <= 50);
      break;
    case "GET_FULL_BANNER_ADVERT":
      return state.filter((e) => e.height > 50);
      break;
    default:
      return state;
      break;
  }
}
export default Reducer;
