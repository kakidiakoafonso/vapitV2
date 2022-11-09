import { Ways } from "../Terminal/terminal.types";
import {ADD} from "./constant";

export type ConfigReducerState = {
  bannerAlreadyViewed: Array<Number>;
};
export type Action = {
  type: typeof ADD;
  payload: Number;
};
