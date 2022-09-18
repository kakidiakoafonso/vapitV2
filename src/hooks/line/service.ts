import api from "../api";

export function getLines(city_id: number): Promise<ILine[]> {
  return api
    .get(`cities/${city_id}/lines`)
    .then((response) => response.data.lines);
}
