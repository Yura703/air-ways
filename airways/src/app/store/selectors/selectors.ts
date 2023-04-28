import { createSelector } from '@ngrx/store';
import { IState } from '../models/stateModel';

const select = (state: IState) => state

export const selectAllFlight = createSelector(select, (state: IState) => state.reponseApi);
export const selectSearchMain = createSelector(select, (state: IState) => state.searchMain);
