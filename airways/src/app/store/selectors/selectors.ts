import { createSelector } from '@ngrx/store';
import { IAppStore, IState } from '../models/stateModel';

const select = (state: IAppStore) => state.state

export const selectAllFlight = createSelector(select, (state: IState) => state.dateFlight);
export const selectSearchMain = createSelector(select, (state: IState) => state.searchMain);
export const selectFormatMoney = createSelector(select, (state: IState) => state.moneyFormat);
export const selectExchangeRate = createSelector(select, (state: IState) => state.exchangeRate);
export const selectTicketsData = createSelector(select, (state: IState) => state.ticketsData);
export const selectSelectedTickets = createSelector(select, (state: IState) => state.selectedTickets);
export const selectContactDetals = createSelector(select, (state: IState) => state.contactDetals);
