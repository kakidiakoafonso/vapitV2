import axios from "axios";
import * as Location from "expo-location";

const apiKey = "053859db322b90449538eab037ea3b1d";
export async function getWeather(): Promise<IWeather> {
  let { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== "granted") {
  }
  let location = await Location.getCurrentPositionAsync({});
  const lat = location.coords.latitude;
  const lon = location.coords.longitude;
  return axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=pt&appid=${apiKey}`
    )
    .then((response) => {
      const weather = response.data.weather[0];
      const temperature = response.data.main.temp;
      const name = response.data.name;
      const FinalWeather: IWeather = { temperature, weather, name };
      return FinalWeather;
    });
}
