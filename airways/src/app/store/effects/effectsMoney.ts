import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs';
import { ApiCurrateService } from 'src/app/core/services/api-currate.service';
// import { TravelpayoutsService } from "src/app/core/services/travelpayouts.service";
import { AppActionTypes, ExchangeChange } from '../actions/actions';

@Injectable()
export class MoneyChangeEffects {
  changeMoney$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AppActionTypes.MoneyChange),
      mergeMap(() =>
        this.apiCurrateService
          .getExchangeRate()
          .pipe(map((resp) => new ExchangeChange(resp.data)))
      )
    )
  );

  constructor(
    private actions$: Actions,
    private apiCurrateService: ApiCurrateService
  ) {}
}
