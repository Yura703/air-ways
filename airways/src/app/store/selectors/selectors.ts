import { createSelector } from '@ngrx/store';
import { IAppStore, IState } from '../models/stateModel';

const select = (state: IAppStore) => state.state

export const selectAllFlight = createSelector(select, (state: IState) => state.dateFlight);
export const selectSearchMain = createSelector(select, (state: IState) => state.searchMain);
