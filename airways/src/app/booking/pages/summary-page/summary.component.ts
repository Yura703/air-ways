import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { ISelectedTickets } from 'src/app/store/models/selectedTickets';
import { IAppStore } from 'src/app/store/models/stateModel';
import { ITicketsData } from 'src/app/store/models/ticketsData';
import { selectTicketsData } from 'src/app/store/selectors/selectors';
import BookingService from '../../service/booking.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryPageComponent implements OnInit {

  //public selectedTickets$ = new Subject<ISelectedTickets>();

  //public ticketData$: Observable<ITicketsData>;

  public costTickets = {
    adult: 1,
    child: 2,
    infant:1,
    adultTax: 100,
    childTax: 50,
    infantTax:10,
    adultFare: 1000,
    childFare: 500,
    infantFare: 100,
    total: 1600,
  };

  constructor(public store: Store<IAppStore>, private bookingService: BookingService) {}

  ngOnInit(): void {
     //this.selectedTickets$ = this.bookingService.selectedTickets$;
     //this.ticketData$ = this.store.pipe(select(selectTicketsData));
     console.log();

  }

  public goBack() {}

  public goOrderCard() {}

  public goBuyNow() {}

 public selectedTickets$ = {
    "to": {
        "value": 32334,
        "trip_class": 0,
        "show_to_affiliates": true,
        "origin": "BER",
        "destination": "NYC",
        "gate": "Biletix",
        "depart_date": "2023-06-15",
        "return_date": "2023-07-09",
        "number_of_changes": 1,
        "found_at": "2023-05-21T15:50:42",
        "duration": 1460,
        "distance": 6410,
        "actual": true,
        "utc": "UTC+0",
        "type": "Non-stop",
        "tymeFly": "Thu Jan 01 1970 05:21:18 GMT+0300 (Москва, стандартное время)",
        "flightNo": "TA 1182",
        "countSeatsAvailable": 1,
        "dateFlightTo": "Thu Jun 15 2023 08:47:55 GMT+0300 (Москва, стандартное время)"
    },
    "from": {
        "value": 122444,
        "trip_class": 0,
        "show_to_affiliates": true,
        "origin": "NYC",
        "destination": "BER",
        "gate": "Biletix",
        "depart_date": "2023-05-25",
        "return_date": "2023-06-01",
        "number_of_changes": 1,
        "found_at": "2023-05-18T21:57:14",
        "duration": 1915,
        "distance": 6390,
        "actual": true,
        "utc": "UTC+0",
        "type": "Direct",
        "tymeFly": "Thu Jan 01 1970 09:04:14 GMT+0300 (Москва, стандартное время)",
        "flightNo": "NJ 1253",
        "countSeatsAvailable": 107,
        "dateFlightTo": "Thu May 25 2023 09:57:51 GMT+0300 (Москва, стандартное время)"
    }
  }



 public ticketData$ = {
      "email": "lyurik1978@gmail.com",
      "phoneNumber": "444-444-4444",
      "phoneCodeCountry": {
          "name": "Algeria",
          "dial_code": "+213",
          "code": "DZ"
      },
      "adult": [
          {
              "firstName": "aaaa",
              "lastName": "aaaa",
              "gender": "female",
              "datepicker": "2023-05-02T21:00:00.000Z",
              "assistance": null,
              "luggage": null
          }
      ],
      "child": [
          {
              "firstName": "sssss",
              "lastName": "ssss",
              "gender": "male",
              "datepicker": "2023-05-16T21:00:00.000Z",
              "assistance": null,
              "luggage": null
          },
          {
              "firstName": "dddd",
              "lastName": "dddd",
              "gender": "female",
              "datepicker": "2023-05-11T21:00:00.000Z",
              "assistance": null,
              "luggage": null
          }
      ],
      "infant": [
          {
              "firstName": "ffff",
              "lastName": "fffff",
              "gender": "male",
              "datepicker": "2023-05-14T21:00:00.000Z",
              "assistance": null,
              "luggage": null
          }
      ]
  }
}
