import config from "./config/reducer";
import { ConfigReducerState } from "./config";
import { combineReducers } from "redux";
import weather, { IWeatherReducer } from "./Weather/weather.reducers";

export type reducerState = {
  weather: IWeatherReducer;
  config: ConfigReducerState;
};
const rootReducer = combineReducers({ weather, config });
export default rootReducer;
