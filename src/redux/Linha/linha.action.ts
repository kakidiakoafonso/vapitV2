import axios from "axios";
import api from "../../service/api";
import {
  FETCH_LINHAS,
  FETCH_LINHAS_SUCESS,
  FETCH_LINHAS_ERROR,
} from "./linhas.type";
import { Ilinha } from "./linhas.reducer";

function fetchRequest() {
  return {
    type: FETCH_LINHAS,
  };
}
function fetchLinhaSucess(linhas: Ilinha[]) {
  return {
    type: FETCH_LINHAS_SUCESS,
    payload: linhas,
  };
}
function fetchLinhaError(error: string) {
  return {
    type: FETCH_LINHAS_ERROR,
    payload: error,
  };
}
export function fetchLinhas(id: number) {
  return (dispatch: any) => {
    dispatch(fetchRequest);
    api
      .get(`cities/${id}/lines`)
      .then((response) => {
        dispatch(fetchLinhaSucess(response.data.lines));
      })
      .catch((error) => {
        dispatch(fetchLinhaError(error));
      });
  };
}
