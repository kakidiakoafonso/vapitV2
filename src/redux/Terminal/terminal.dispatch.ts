import api from "../../service/api";
import {
  getTerminais,
  getTerminaisSucess,
  getTerminaisError,
} from "./terminal.action";

export function dispatchTerminais(code: string) {
  console.log(code);

  return (dispatch: any) => {
    dispatch(getTerminais());
    api
      .get(`lines/${code}/itineraries`)
      .then((response) => {
        dispatch(getTerminaisSucess(response.data));
      })
      .catch((error) => {
        dispatch(getTerminaisError(error));
      });
  };
}
