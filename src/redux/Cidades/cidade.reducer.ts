import { FETCH_CIDADES, FETCH_CIDADES_ERROR, FETCH_CIDADES_SUCESS } from "./cidade.types";
import { ICidade } from "./cidade.action";

type IcidadeAction =
{
    type:string,
    payload:any
}
export type IState =
{
    cidades:ICidade[],
    loading:boolean,
    error:string
}

const initialState:any = {
    cidades: null as (null | ICidade[]),
    loading:true,
    error:""
}
export default function cidadeReducer (state:IState = initialState, action:IcidadeAction)
{
    switch (action.type) {
        case FETCH_CIDADES:
             return {
                 ...state,
                 loading:true,
             }
            break;
        case FETCH_CIDADES_SUCESS:
             return {
                cidades:action.payload,
                loading:false,
                error:""
             }
            break;
        case FETCH_CIDADES_ERROR:
             return {
                 ...state,
                 loading:false,
                 error:action.payload,
             }
            break;
    
        default:
            return state
            break;
    }
} 