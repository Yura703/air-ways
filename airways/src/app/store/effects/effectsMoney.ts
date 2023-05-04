import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, exhaustMap, map, mergeMap, of, tap } from "rxjs";
import { ApiCurrateService } from "src/app/core/services/api-currate.service";
import { TravelpayoutsService } from "src/app/core/services/travelpayouts.service";
import { AddInfoFlight, AppActionTypes, ExchangeChange, FlightsLoadedError } from "../actions/actions";

@Injectable()
export class MoneyChangeEffects {
    changeMoney$ = createEffect(
        () => this.actions$.pipe(
            ofType(AppActionTypes.MoneyChange),
            mergeMap(() =>
                this.apiCurrateService.getExchangeRate().pipe(
                    map((resp) => new ExchangeChange(resp.data),
                    ))
            )
        ));

    constructor(
        private actions$: Actions,
        private apiCurrateService: ApiCurrateService
    ) { }
}