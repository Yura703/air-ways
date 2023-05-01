import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ISearchData, ITicketData } from 'src/app/shared/models/models';

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

  constructor() {
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
}
