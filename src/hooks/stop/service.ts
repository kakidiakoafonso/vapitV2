import api from "../api";

export function getStops(line_id: Number): Promise<IStop[]> {
  return api.get(`lines/${line_id}/stops`).then((response) => response.data);
}
