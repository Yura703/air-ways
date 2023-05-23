import { Action } from '@ngrx/store';
import { IMoneyFormat } from '../models/moneyFormat';
import { IOptionsSearch } from '../models/optionsSearch';
import { IDateExchange } from '../models/responseApiCurrate';
import { IDateApi } from '../models/responseApiFlightModel';
import { ITicketsData } from '../models/ticketsData';

export enum AppActionTypes {
  AddSearchMain = '[SEARCH MAIN] AddSearch',
  AddInfoFlight = '[FLIGHT INFO] AddInfoFlight',
  ErrorInfoFlight = '[FLIGHT INFO] ErrorInfoFlight',
  MoneyChange = '[MONEY CHANGE] MoneyChange',
  ExchangeChange = '[EXCHANGE CHANGE] ExchangeChange',
  AddTicketsData = '[ADD TICKETS DATA] AddTicketsData',
}

export class AddSearch implements Action {
  readonly type = AppActionTypes.AddSearchMain;
  constructor(public payload: IOptionsSearch) {}
}

export class AddInfoFlight implements Action {
  readonly type = AppActionTypes.AddInfoFlight;
  constructor(public payload: IDateApi[]) {}
}

export class FlightsLoadedError implements Action {
  readonly type = AppActionTypes.ErrorInfoFlight;
}

export class MoneyChange implements Action {
  readonly type = AppActionTypes.MoneyChange;
  constructor(public payload: IMoneyFormat) {}
}

export class ExchangeChange implements Action {
  readonly type = AppActionTypes.ExchangeChange;
  constructor(public payload: IDateExchange) {}
}

export class AddTicketsData implements Action {
  readonly type = AppActionTypes.AddTicketsData;
  constructor(public payload: ITicketsData) {}
}

export type ActionUnion =
  | AddSearch
  | AddInfoFlight
  | FlightsLoadedError
  | MoneyChange
  | ExchangeChange
  | AddTicketsData;
