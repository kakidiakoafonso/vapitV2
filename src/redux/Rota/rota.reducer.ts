import {SET_DESTINO,SET_ORIGEM} from './rota.type'
import {Ilinha} from './../Linha/linhas.reducer'
import { IEtinerarios } from '../Terminal/terminal.types'
// import {} from ''

type IAction =
{
    type:string,
    payload:any
}
export type IRotas =
{
    origem:Ilinha,
    destion:IEtinerarios
}

const initalState:IRotas = {
    destion:{
        day:"",
        terminal:"",
        times:[""]
    },
    origem:{
        code:"",
        created_at:"",
        id:0,
        name:"",
        updated_at:""
    }
}
export default function rotasReducers (state:IRotas =initalState ,action:IAction)
{
    switch (action.type) 
    {
        case SET_ORIGEM:
            return  {...state,origem:action.payload}
            break;

        case SET_DESTINO:
            return  {...state,destion:action.payload}
            break;
    
        default:
            return state
            break;
    }

}