
import { ActionUnion, AppActionTypes } from '../actions/actions';
import { IState } from '../models/stateModel';
import { stateApp } from './../'



export const Reducers = (
    state = stateApp,
    action: ActionUnion
): IState => {
    switch (action.type) {
        case AppActionTypes.AddSearchMain: {
            return {
                ...state,
                searchMain: action.payload,
            };
        }
        case AppActionTypes.AddInfoFlight: {
            return {
                ...state,
                dateFlight: action.payload,
            };
        }
        case AppActionTypes.ErrorInfoFlight: {
            return {
                ...state,
                errorLoading: true,
            };
        }
        case AppActionTypes.MoneyChange: {
            return {
                ...state,
                moneyFormat: action.payload,
            };
        }
        case AppActionTypes.ExchangeChange: {
            const exchange = Object.values(action.payload);
            return {
                ...state,
                exchangeRate: exchange.length ? Number(exchange[0]) : 1,
            };
        }
        case AppActionTypes.AddTicketsData: {
            return {
                ...state,
                ticketsData: action.payload,
            };
        }
        case AppActionTypes.AddSelectedTickets: {
          return {
              ...state,
              selectedTickets: action.payload,
          };
      }
        default:
            return state;
    }
};

