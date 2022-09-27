import { Ilinha } from "../Linha/linhas.reducer";
import { IEtinerarios} from "../Terminal/terminal.types";
import { SET_ORIGEM,SET_DESTINO } from "./rota.type";

export function setOrigem(linha:Ilinha) {
    return {
        type:SET_ORIGEM,
        payload:linha
    }
}
export function setDestino(terminal:IEtinerarios) {
    return {
        type:SET_DESTINO,
        payload:terminal
    }
}