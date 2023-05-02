import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, exhaustMap, map, mergeMap, of, tap } from "rxjs";
import { TravelpayoutsService } from "src/app/core/services/travelpayouts.service";
import { AddInfoFlight, AppActionTypes, FlightsLoadedError } from "../actions/actions";

@Injectable()
export class FlightEffects {
    loadFlight$ = createEffect(
        () => this.actions$.pipe(
            ofType(AppActionTypes.AddSearchMain),
            mergeMap(() =>
                this.travelpayoutsService.getInfoFlight().pipe(
                    map((flight) => new AddInfoFlight(flight.data),
                    ))
            ),
            catchError(() => of(new FlightsLoadedError()))
        ));

    constructor(
        private actions$: Actions,
        private travelpayoutsService: TravelpayoutsService
    ) { }
}