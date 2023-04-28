import { Action } from '@ngrx/store';
import { IResponseApi } from '../models/responseApiFlightModel';
import { ISearchMain } from '../models/searchMainModel';


export enum AppActionTypes {
    AddSearchMain = '[SEARCH MAIN] AddSearch',
    AddInfoFlight = '[FLIGHT INFO] AddInfoFlight',
}

export class AddSearch implements Action {
    readonly type = AppActionTypes.AddSearchMain;
    constructor(public payload: ISearchMain) { }
}

export class AddInfoFlight implements Action {
    readonly type = AppActionTypes.AddInfoFlight;
    constructor(public payload: IResponseApi[]) { }
}


export type ActionUnion = | AddSearch | AddInfoFlight;