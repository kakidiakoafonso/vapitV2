import {ITerminalState, IEtinerarios, GET_TERMINAIS,GET_TERMINAIS_SUCESS,GET_TERMINAIS_ERROR} from './terminal.types'

type IAction =
{
    type:string
    payload:any
}
const initialState:ITerminalState = {
    loading:true,
    error:"",
    Itinerarios:null as (null | IEtinerarios)
}
export default function reducer(state = initialState, action:IAction )
{
    switch (action.type) {
        case GET_TERMINAIS:
            return {
                loading:true,
                error:"",
                Itinerarios:[]
            }
            break;
        case GET_TERMINAIS_SUCESS:
            return {
                loading:false,error:"",
                Itinerarios:action.payload
            }
            break;
        case GET_TERMINAIS_ERROR:
            return {
                Itinerarios:[],
                loading:false,error:action.payload
            }
            break;
        default:
            return state
            break;
    }

}