import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASIC_URL_AUTOCOMPLETE } from '../constants/const';
import { IAirportResponse } from '../models/autocompleteModel';

@Injectable({
  providedIn: 'root',
})
export class AutocompleteHttpService {
  constructor(private http: HttpClient) {}

  getAirport(value: string): Observable<IAirportResponse[]> {
    return this.http.get<IAirportResponse[]>(
      `${BASIC_URL_AUTOCOMPLETE}${value}`
    );
  }
}
