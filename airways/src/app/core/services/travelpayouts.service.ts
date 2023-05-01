import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { BASIC_URL_TRAVELPAYOUTS } from 'src/app/constants/const';
import { IResponseApi } from 'src/app/store/models/responseApiFlightModel';
import { ISearchMain } from 'src/app/store/models/searchMainModel';
import { IAppStore } from 'src/app/store/models/stateModel';
import { selectSearchMain } from 'src/app/store/selectors/selectors';

@Injectable({
  providedIn: 'root'
})
export class TravelpayoutsService {
  optionsQuery: ISearchMain;
  optionsQuery$ = this.store.pipe(select(selectSearchMain));

  constructor(private http: HttpClient, private store: Store<IAppStore>) { }



  getInfoFlight(): Observable<IResponseApi[]> {
    this.optionsQuery$.subscribe(param => this.optionsQuery = param);

    return this.http.get<IResponseApi[]>(
      BASIC_URL_TRAVELPAYOUTS, {
      params: {
        origin: this.optionsQuery.origin.location.split(' ').reverse()[0],
        destination: this.optionsQuery.destination.location.split(' ').reverse()[0],
      }
    }
    );
  }
}
