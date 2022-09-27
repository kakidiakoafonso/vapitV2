import {IEtinerarios, GET_TERMINAIS,GET_TERMINAIS_SUCESS,GET_TERMINAIS_ERROR} from './terminal.types'
export function getTerminais(){
    return {
        type:GET_TERMINAIS
    }
}

export function getTerminaisSucess(Etinerarios:IEtinerarios[]){
    return {
        type:GET_TERMINAIS_SUCESS,
        payload:Etinerarios
    }
}

export function getTerminaisError(error:string){
    return {
        type:GET_TERMINAIS_ERROR,
        payload:error
    }
}