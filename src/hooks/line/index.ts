import { useQuery } from "@tanstack/react-query";
import * as service from "./service";

export function useGetLines(city_id: Number) {
  return useQuery<ILine[], Error>(["getLines"], () =>
    service.getLines(city_id)
  );
}
