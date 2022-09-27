import { WayReducerState,Action } from "./way.types";

const initialState:WayReducerState = {
    direction: '',
    ways:[]
}

export function reducer(state:WayReducerState = initialState, action:Action) {

    switch (action.type) {
        case "SETWAY":
            return {
                direction:action.payload.direction,
                ways:action.payload.ways
            }
            break;
        case "REMOVEWAY":
            return {
                direction:'',
                ways:[]
            }
            break;    
        default:
            return state
            break;
    }
    
}