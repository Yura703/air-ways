import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASIC_URL_TRAVELPAYOUTS } from 'src/app/constants/const';
import { IResponseApi } from 'src/app/store/models/responseApiFlightModel';

@Injectable({
  providedIn: 'root'
})
export class TravelpayoutsService {

  constructor(private http: HttpClient) { }

  getInfoFlight(): Observable<IResponseApi[]> {

    return this.http.get<IResponseApi[]>(
      `${BASIC_URL_TRAVELPAYOUTS}`
    );
  }

  headers: { 'X-Auth-Token': 'user:1407172832672:a334564e7dd50848bc20f8984a152f77' }
}
