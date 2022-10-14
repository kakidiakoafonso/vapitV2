import * as C from "./constants";
import { Action } from "./types";
export function setAdverts(adverts: IAdverts[]): Action {
  return {
    type: C.SET_ADVERT,
    payload: adverts,
  };
}
export function getFullAdverts(): Action {
  return {
    type: C.GET_FULL_BANNER_ADVERT,
    payload: null,
  };
}
export function getSmallAdverts(): Action {
  return {
    type: C.GET_SMALL_ADVERT,
    payload: null,
  };
}
