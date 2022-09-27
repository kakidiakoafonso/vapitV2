import { Ways } from "../Terminal/terminal.types";
import { REMOVEWAY,SETWAY } from "./way.constant";
import { Action } from "./way.types";

export function setWays(ways:Ways,direction:string):Action {
    return {
        type: SETWAY,
        payload:{ways,direction}
    }
}
export function removeWays():any {
    return {type: REMOVEWAY}
}