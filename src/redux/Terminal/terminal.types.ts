export type ITerminalState= {
    loading:boolean,
    error:string
    Itinerarios:IEtinerarios 
}
export type IEtinerarios= {
    name: string,
    ads: IAds[]
    directions: Directions[]
}
export type Directions= {
    direction: string,
    day: string,
    ways: Ways[],
}

export type Ways = {
    name: string,
    itineraries: Itineraries[]
}

export type Itineraries = {
    company: string,
    adapted: boolean,
    time: string,
}
export type IAds= {
    id: number,
    description: string,
    slug: string,
    title: string,
    width: number,
    height: number,
    end_date: string,
    url:string,
    link:string,
}

export const GET_TERMINAIS = "GET_TERMINAIS"
export const GET_TERMINAIS_SUCESS = "GET_TERMINAIS_SUCESS"
export const GET_TERMINAIS_ERROR = "GET_TERMINAIS_ERROR"