import api from "../../service/api";
import {
  FETCH_CIDADES,
  FETCH_CIDADES_ERROR,
  FETCH_CIDADES_SUCESS,
} from "./cidade.types";

export type ICidade = {
  id: number;
  name: string;
  integration: string;
  state_id: number;
  created_at: string;
  status: boolean;
  updated_at: string;
  url: string[];
  state: {
    id: number;
    name: string;
    status: number;
    created_at: string;
    updated_at: string;
  };
};
export function fetchRequest() {
  return {
    type: FETCH_CIDADES,
  };
}
export function fetchCidadeSucess(cidades: ICidade[]) {
  return {
    type: FETCH_CIDADES_SUCESS,
    payload: cidades,
  };
}
export function fetchCidadeError(error: string) {
  return {
    type: FETCH_CIDADES_ERROR,
    payload: error,
  };
}
export function fetchCidade() {
  return (dispatch: any) => {
    dispatch(fetchRequest);
    api
      .get("cities")
      .then((response) => {
        dispatch(fetchCidadeSucess(response.data.cities));
      })
      .catch((error) => {
        dispatch(fetchCidadeError(error));
      });
  };
}
