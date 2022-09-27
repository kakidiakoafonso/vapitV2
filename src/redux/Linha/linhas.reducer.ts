import {
  FETCH_LINHAS,
  FETCH_LINHAS_SUCESS,
  FETCH_LINHAS_ERROR,
} from "./linhas.type";

type IlinhasAction = {
  type: string;
  payload: any;
};
export type Ilinha = {
  id: number;
  name: string;
  code: string;
  allow_ads: number;
  status: number;
  created_at: string;
  updated_at: string;
};
export type ILinhas = {
  linhas: Ilinha[];
  loading: boolean;
  error: string;
};

const initialState: any = {
  linhas: [],
  loading: true,
  error: "",
};
export default function cidadeReducer(
  state: ILinhas = initialState,
  action: IlinhasAction
) {
  switch (action.type) {
    case FETCH_LINHAS:
      return {
        linhas: [],
        loading: true,
        error: "",
      };
      break;
    case FETCH_LINHAS_SUCESS:
      return {
        linhas: action.payload,
        loading: false,
        error: "",
      };
      break;
    case FETCH_LINHAS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
      break;

    default:
      return state;
      break;
  }
}
