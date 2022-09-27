import { Ways } from "../Terminal/terminal.types";
import {REMOVEWAY,SETWAY} from './way.constant'
export type WayReducerState= {
    direction:string,
    ways: Ways | []
}
export type Action = {
    type: typeof REMOVEWAY | typeof SETWAY,
    payload: {ways:Ways, direction:string}
}