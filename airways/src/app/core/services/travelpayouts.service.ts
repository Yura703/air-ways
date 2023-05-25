import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { merge, Observable, scan } from 'rxjs';
import { BASIC_URL_TRAVELPAYOUTS } from 'src/app/constants/const';
import { IOptionsSearch } from 'src/app/store/models/optionsSearch';
import { IResponseApi } from 'src/app/store/models/responseApiFlightModel';
import { IAppStore } from 'src/app/store/models/stateModel';
import { selectSearchMain } from 'src/app/store/selectors/selectors';

@Injectable({
  providedIn: 'root',
})
export class TravelpayoutsService {
  optionsQuery: IOptionsSearch;
  optionsQuery$ = this.store.pipe(select(selectSearchMain));

  constructor(private http: HttpClient, private store: Store<IAppStore>) {}

  getInfoFlight(): Observable<IResponseApi> {
    this.optionsQuery$.subscribe((param) => {
      this.optionsQuery = param;
      console.log(param); //выводит запрос в консоль
    });

    return merge(
      this.http.get<IResponseApi>(BASIC_URL_TRAVELPAYOUTS, {
        params: {
          origin: this.optionsQuery.origin,
          destination: this.optionsQuery.destination,
          departure_at: this.optionsQuery.startDate,
          // return_at: this.optionsQuery.returnDate
          //   ? this.optionsQuery.returnDate
          //   : '',
        },
      }),
      this.http.get<IResponseApi>(BASIC_URL_TRAVELPAYOUTS, {
        params: {
          origin: this.optionsQuery.destination,
          destination: this.optionsQuery.origin,
          departure_at: this.optionsQuery.returnDate
            ? this.optionsQuery.returnDate
            : '',
          // return_at: this.optionsQuery.startDate,
        },
      })
    ).pipe(
      scan((to, from) => {
        return { ...to, data: [...to.data, ...from.data] };
      })
    );
  }
}
