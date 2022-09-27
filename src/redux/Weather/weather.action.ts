export const GET_WEATHER = "GET_WEATHER";
export const GET_WEATHER_SUCESS = "GET_WEATHER_SUCESS";
export const GET_WEATHER_ERROR = "GET_WEATHER_ERROR";

export function getWeather() {
  return {
    type: GET_WEATHER,
  };
}
export function getWeatherSucess(weather: IWeather) {
  return {
    type: GET_WEATHER_SUCESS,
    payload: weather,
  };
}
export function getWeatherError(error: string) {
  return {
    type: GET_WEATHER_ERROR,
    payload: error,
  };
}
