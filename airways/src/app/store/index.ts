import { ActionReducerMap } from "@ngrx/store";
import { IOptionsSearch } from "./models/optionsSearch";
import { IAppStore, IState } from "./models/stateModel";
import { Reducers } from "./reducers/reducers";

export const stateApp: IState = {
    dateFlight: [],
    searchMain: {} as IOptionsSearch,
    errorLoading: false,
    exchangeRate: 1,
    moneyFormat: 'RUB',

    
    tempFlight: [{
        item: 'FR 1925',
        flight: 'Dublin - Warshawa',
        typeTrip: 'Round trip',
        data: 'fsdfsdf',
        passengers: 'fdsfsdf',
        price: 551,
      }, {
        item: 'FR 192523',
        flight: 'Dublin - Warshawa',
        typeTrip: 'Round trip',
        data: 'fsdf',
        passengers: 'fdsfsdf',
        price: 551,
      }, {
        item: 'FRff 192523',
        flight: 'Dubliffn - Warshawa',
        typeTrip: 'Round trip',
        data: 'fsdf',
        passengers: 'fdsfsdf',
        price: 5345,
      }
      ],
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

