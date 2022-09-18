import { useQuery } from "@tanstack/react-query";
import * as service from "./service";

export function useGetWeather() {
  return useQuery<IWeather, Error>(["getWeather"], () => service.getWeather());
}
