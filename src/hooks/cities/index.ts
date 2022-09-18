import { useQuery } from "@tanstack/react-query";
import * as service from "./service";

export function useGetCities() {
  return useQuery<ICitie[], Error>(["getStates"], () => service.getCities());
}
