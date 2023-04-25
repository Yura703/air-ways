import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IAirportResponse } from '../models/autocompleteModel';
import { BASIC_URL_AUTOCOMPLETE } from '../const/const';

@Injectable({
  providedIn: 'root'
})
export class AutocompleteHttpService {

  constructor(private http: HttpClient) { }

  getAirport(value: string): Observable<IAirportResponse[]> {
    return this.http.get<IAirportResponse[]>(
      `${BASIC_URL_AUTOCOMPLETE}${value}`
    );
  }


}
