import { useQuery } from "@tanstack/react-query";
import * as service from "./service";

export function useGetStops(line_id: Number) {
  return useQuery<IStop[], Error>(["getStops"], () =>
    service.getStops(line_id)
  );
}
