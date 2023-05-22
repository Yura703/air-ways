import { IMoneyFormat } from './moneyFormat';
import { IOptionsSearch } from './optionsSearch';
import { IDateApi } from './responseApiFlightModel';

export interface IState {
  dateFlight: IDateApi[];
  searchMain: IOptionsSearch;
  errorLoading: boolean;
  exchangeRate: number;
  moneyFormat: IMoneyFormat;
}

export interface IAppStore {
  state: IState;
}
