import { useQuery } from "@tanstack/react-query";
import * as service from "./service";

export function useGetStops(line_id: number) {
  return useQuery<IStop[], Error>(["getStops"], () =>
    service.getStops(line_id)
  );
}
