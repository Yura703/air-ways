import { IMoneyFormat } from './moneyFormat';
import { IOptionsSearch } from './optionsSearch';
import { IDateApi } from './responseApiFlightModel';
import { ITicketsData } from './ticketsData';

export interface IState {
  dateFlight: IDateApi[];
  searchMain: IOptionsSearch;
  ticketsData: ITicketsData,
  errorLoading: boolean;
  exchangeRate: number;
  moneyFormat: IMoneyFormat;
}

export interface IAppStore {
  state: IState;
}
