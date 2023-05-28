import { ActionReducerMap } from '@ngrx/store';
import { IContactDetals } from './models/contactDetals';
import { IOptionsSearch } from './models/optionsSearch';
import { ISelectedTickets } from './models/selectedTickets';
import { IAppStore, IState } from './models/stateModel';
import { ITicketsData } from "./models/ticketsData";
import { Reducers } from './reducers/reducers';

export const stateApp: IState = {
  dateFlight: [],
  searchMain: {} as IOptionsSearch,
  ticketsData: {} as ITicketsData,
  selectedTickets: {} as ISelectedTickets,
  contactDetals: {} as IContactDetals,
  errorLoading: false,
  exchangeRate: 1,
  moneyFormat: 'RUB',
};

export const initalState: IAppStore = {
  state: stateApp,
};
//у меня проверка пишет, что не использвется эта функция
export function getInitalState(): IAppStore {
  return initalState;
}

export const appReducers: ActionReducerMap<IAppStore, any> = {
  state: Reducers,
};
