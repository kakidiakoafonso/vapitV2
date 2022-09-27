import { Ways } from "../Terminal/terminal.types";
import * as A from "./constant";

export type ConfigReducerState = {
  bannerAlreadyViewed: boolean;
};
export type Action = {
  type: typeof A.BANNERVIEWED;
  payload: { ways: Ways; direction: string };
};
