import { IContactDetals } from './contactDetals';
import { IMoneyFormat } from './moneyFormat';
import { IOptionsSearch } from './optionsSearch';
import { IDateApi } from './responseApiFlightModel';
import { ISelectedTickets } from './selectedTickets';
import { ITicketsData } from './ticketsData';

export interface IState {
  dateFlight: IDateApi[];
  searchMain: IOptionsSearch;
  ticketsData: ITicketsData,
  selectedTickets: ISelectedTickets;
  contactDetals: IContactDetals;
  errorLoading: boolean;
  exchangeRate: number;
  moneyFormat: IMoneyFormat;
}

export interface IAppStore {
  state: IState;
}
