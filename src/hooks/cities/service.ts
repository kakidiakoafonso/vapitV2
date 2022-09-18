import api from "../api";

export function getCities(): Promise<ICitie[]> {
  return api.get("cities/").then((response) => response.data.cities);
}
