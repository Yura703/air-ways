import { IResponseApi } from "./responseApiFlightModel";
import { ISearchMain } from "./searchMainModel";

export interface IState {
    reponseApi: IResponseApi[];
    searchMain: ISearchMain;
}

export interface IAppStore {
    state: IState;
  }