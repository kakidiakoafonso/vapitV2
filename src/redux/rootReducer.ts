import config from "./config/reducer";
import { ConfigReducerState } from "./config";
import adverts from "./adverts/reducer";
import { combineReducers } from "redux";
import weather, { IWeatherReducer } from "./Weather/weather.reducers";

export type reducerState = {
  weather: IWeatherReducer;
  config: ConfigReducerState;
  adverts: IAdverts[];
};
const rootReducer = combineReducers({ weather, config, adverts });
export default rootReducer;
