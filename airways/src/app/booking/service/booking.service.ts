import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { BehaviorSubject, Observable } from 'rxjs';
import { ISearchData, ITicketData } from 'src/app/shared/models/models';
import { IOptionsSearch } from 'src/app/store/models/optionsSearch';
import { IAppStore } from 'src/app/store/models/stateModel';
import { selectSearchMain } from 'src/app/store/selectors/selectors';

@Injectable({
  providedIn: 'root'
})
export default class BookingService {

  private mockSearchData = {
    sityFrom: 'Dooblin',
    sityFromABBR: 'DUB',
    sityTo: "Warsaw Modlin",
    sityToABBR: "WAW",
    departureDate: '01/01/2023',
    arrivalDate: '02/02/2023',
    passengers: {
      adult: '2',
      child: '3',
      infant: '4',
    },
  };

  private mockTicketList:  ITicketData[] = [{
    sityFrom: 'Dooblin',
    sityFromABBR: 'DUB',
    sityTo: "Warsaw Modlin",
    sityToABBR: "WAW",
    departureDate: '1682616239210',
    arrivalDate: '1682616238210',
    passengers: {
      adult: '2',
      child: '3',
      infant: '4',
    },
    currency: '€',
    ticketPrice: '158.155',
  },
  {
    sityFrom: 'Dooblin',
    sityFromABBR: 'DUB',
    sityTo: "Warsaw Modlin",
    sityToABBR: "WAW",
    departureDate: '1682606239210',
    arrivalDate: '1682606438210',
    passengers: {
      adult: '2',
      child: '3',
      infant: '4',
    },
    currency: '€',
    ticketPrice: '158.155',
  },
  {
    sityFrom: 'Dooblin',
    sityFromABBR: 'DUB',
    sityTo: "Warsaw Modlin",
    sityToABBR: "WAW",
    departureDate: '1682216239210',
    arrivalDate: '168261238210',
    passengers: {
      adult: '2',
      child: '3',
      infant: '4',
    },
    currency: '€',
    ticketPrice: '158.155',
  },
  {
    sityFrom: 'Dooblin',
    sityFromABBR: 'DUB',
    sityTo: "Warsaw Modlin",
    sityToABBR: "WAW",
    departureDate: '1682613239210',
    arrivalDate: '1682614238210',
    passengers: {
      adult: '2',
      child: '3',
      infant: '4',
    },
    currency: '€',
    ticketPrice: '158.155',
  }];

  private searchData: ISearchData;

  public searchData$ = new BehaviorSubject(this.mockSearchData);

  public optionsQuery$ = this.store.pipe(select(selectSearchMain));

  constructor(private store: Store<IAppStore>) {

    this.searchData$.subscribe(data => this.searchData = data);
  }

  public getTicketList():  ITicketData[] {
    return this.mockTicketList;
  }

  public editSearchData(newSearchData: Partial<ISearchData>) {

    this.searchData$.next(
      {
        ...this.searchData,
        ...newSearchData,
      }
    );
  }

  // getSearchData(): Observable<IOptionsSearch> {
  //   this.optionsQuery$.subscribe(param => this.optionsQuery = param);

  // }
}
