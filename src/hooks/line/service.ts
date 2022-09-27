import api from "../api";

export function getLines(city_id: Number): Promise<ILine[]> {
  return api
    .get(`cities/${city_id}/lines`)
    .then((response) => response.data.lines);
}
