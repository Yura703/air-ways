import { ActionReducerMap } from "@ngrx/store";
import { ISearchMain } from "./models/searchMainModel";
import { IAppStore, IState } from "./models/stateModel";
import { Reducers } from "./reducers/reducers";

export const stateApp: IState = {
    reponseApi: [],
    searchMain: {} as ISearchMain,
};

export const initalState: IAppStore = {
    state: stateApp,
};

export function getInitalState(): IAppStore {
    return initalState;
}

export const appReducers: ActionReducerMap<IAppStore, any> = {
    state: Reducers,
};

