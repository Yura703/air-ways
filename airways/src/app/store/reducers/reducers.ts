
import { ActionUnion, AppActionTypes } from '../actions/actions';
import { IState } from '../models/stateModel';
import { stateApp } from './../'



export const Reducers = (
    state = stateApp,
    action: ActionUnion
): IState => {
    switch (action.type) {
        case AppActionTypes.AddSearchMain: {
            console.log(action.payload)
            return {
                ...state,
                searchMain: action.payload,
            };
        }
        case AppActionTypes.AddInfoFlight: {

            return {
                ...state,
                reponseApi: action.payload,
            };
        }
        default:
            return state;
    }
};

