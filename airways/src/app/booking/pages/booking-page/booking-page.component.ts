import { Component, OnInit } from '@angular/core';
import { ISearchData, ITicketData } from 'src/app/shared/models/models';

@Component({
  selector: 'app-booking-page',
  templateUrl: './booking-page.component.html',
  styleUrls: ['./booking-page.component.scss']
})
export default class BookingPageComponent implements OnInit {
  public tiketsList: ITicketData[];

  public searchData: ISearchData;

  ngOnInit(): void {
    //! сделать обращение к сервису
    this.tiketsList = [{
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
        amountPassengers: '9',
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
        amountPassengers: '9',
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
        amountPassengers: '9',
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
        amountPassengers: '9',
      },
      currency: '€',
      ticketPrice: '158.155',
    }];

    this.searchData = {
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
        amountPassengers: '9',
      },
    }
  }



}
