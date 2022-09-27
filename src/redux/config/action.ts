import * as T from "./constant";
export function setBannerViewed() {
  return {
    type: T.BANNERVIEWED,
    payload: true,
  };
}
