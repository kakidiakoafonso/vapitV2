import {
  GET_WEATHER,
  GET_WEATHER_SUCESS,
  GET_WEATHER_ERROR,
} from "./weather.action";
type IAction = {
  type: string;
  payload: IWeather | string;
};
export type IWeatherReducer = {
  loading: boolean;
  error: string;
  weather: IWeather;
};
const inititialState: IWeatherReducer | [] = [];
export default function Reducers(state = inititialState, action: IAction) {
  switch (action.type) {
    case GET_WEATHER:
      return {
        ...state,
        loading: true,
      };
      break;
    case GET_WEATHER_SUCESS:
      return {
        ...state,
        loading: false,
        weather: action.payload,
      };
      break;
    case GET_WEATHER_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
      break;
    default:
      return state;
      break;
  }
}
