import { IOptionsSearch } from "./optionsSearch";
import { IDateApi, IResponseApi } from "./responseApiFlightModel";

export interface IState {
    dateFlight: IDateApi[];
    searchMain: IOptionsSearch;
    errorLoading: boolean;
}

export interface IAppStore {
    state: IState;
  }