import { Action } from '@ngrx/store';
import { IOptionsSearch } from '../models/optionsSearch';
import { IDateApi, IResponseApi } from '../models/responseApiFlightModel';

export enum AppActionTypes {
    AddSearchMain = '[SEARCH MAIN] AddSearch',
    AddInfoFlight = '[FLIGHT INFO] AddInfoFlight',
    ErrorInfoFlight = '[FLIGHT INFO] ErrorInfoFlight',
}

export class AddSearch implements Action {
    readonly type = AppActionTypes.AddSearchMain;
    constructor(public payload: IOptionsSearch) { }
}

export class AddInfoFlight implements Action {
    readonly type = AppActionTypes.AddInfoFlight;
    constructor(public payload: IDateApi[]) { }
}

export class FlightsLoadedError implements Action {
    readonly type = AppActionTypes.ErrorInfoFlight;
}


export type ActionUnion = | AddSearch | AddInfoFlight | FlightsLoadedError;