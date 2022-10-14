import * as C from "./constants";
export type Action = {
  type:
    | typeof C.SET_ADVERT
    | typeof C.GET_SMALL_ADVERT
    | typeof C.GET_FULL_BANNER_ADVERT;
  payload: IAdverts[] | null;
};
