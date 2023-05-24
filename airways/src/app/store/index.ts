import { ActionReducerMap } from '@ngrx/store';
import { IOptionsSearch } from './models/optionsSearch';
import { IAppStore, IState } from './models/stateModel';
import { Reducers } from './reducers/reducers';

export const stateApp: IState = {
  dateFlight: [],
  searchMain: {} as IOptionsSearch,
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
