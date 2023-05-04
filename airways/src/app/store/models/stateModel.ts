import { IFlightInfo } from "./flightInfo";
import { IMoneyFormat } from "./moneyFormat";
import { IOptionsSearch } from "./optionsSearch";
import { IDateApi, IResponseApi } from "./responseApiFlightModel";

export interface IState {
    dateFlight: IDateApi[];
    searchMain: IOptionsSearch;
    errorLoading: boolean;
    exchangeRate: number;
    moneyFormat: IMoneyFormat;


    tempFlight: IFlightInfo[]; //временно потом отредактировать
}

export interface IAppStore {
    state: IState;
  }