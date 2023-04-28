import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { exhaustMap, map, mergeMap, tap } from "rxjs";
import { TravelpayoutsService } from "src/app/core/services/travelpayouts.service";
import { AppActionTypes } from "../actions/actions";

@Injectable()
export class FlightEffects {
    loadFlight$ = createEffect(
        () => this.actions$.pipe(
            ofType(AppActionTypes.AddSearchMain),
            exhaustMap(()=>
            this.travelpayoutsService.getInfoFlight().pipe(
                map((flight) => console.log(flight)),
            ))
          ),
          { dispatch: false }
          // FeatureActions.actionOne is not dispatched
        );
    

    //   this.actions$.pipe(
    //     ofType(AppActionTypes.AddSearchMain),
    //     mergeMap(() =>
    //       this.travelpayoutsService.getInfoFlight().pipe(
    //         map(
    //           (flights) =>
    //           console.log(flights)
    //             // new ArticlesLoadedSuccess({
    //             //   articles: articles,
    //             // })
    //         ),
    //         // catchError(() => of(new ArticlesLoadedError()))
    //       )
    //     )
    //   );

    constructor(
        private actions$: Actions,
        private travelpayoutsService: TravelpayoutsService
    ) { }
}