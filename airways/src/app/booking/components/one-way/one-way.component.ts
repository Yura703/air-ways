import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { BehaviorSubject, Observable, Subject, takeUntil } from 'rxjs';
import { IDateApi } from 'src/app/store/models/responseApiFlightModel';
import { IAppStore } from 'src/app/store/models/stateModel';
import { selectSearchMain } from 'src/app/store/selectors/selectors';
import BookingService from '../../service/booking.service';
import { selectAllFlight } from 'src/app/store/selectors/selectors';

@Component({
  selector: 'app-one-way',
  templateUrl: './one-way.component.html',
  styleUrls: ['./one-way.component.scss']
})
export default class OneWayComponent implements OnInit, OnDestroy {

  @Input() direction: boolean;

  public dateFlight$: Observable<IDateApi[]>;

  public dateFlight: IDateApi[];

  public idFlight = 0;

  private ngUnsubscribe = new Subject<void>();

  public ticketInfo = {
    from: 'Dooblin',
    to: "Warsaw Modlin",
    dateFrom: '1Mar',
    dateTo: '18Mar',
    person: '3',
    dateFlightFrom: new Date(),
    dateFlightTo: new Date(),
    utc: 'UTC +0',
    type: 'Direct',
    tymeFly: '2h 50m',
    flightNo: 'FR 1925',
    countSeatsAvailable: '100',
    currency: "€",
    cost: 146.7777777,
  }

  /*
  actual:true
  depart_date:"2023-05-18"
  destination:"CMB"
  distance:6947
  duration:2120
  found_at:"2023-05-06T09:31:47"
  gate:"SuperKassa.ru"
  number_of_changes:1
  origin:"MSQ"
  return_date:"2023-06-05"
  show_to_affiliates:true
  trip_class:0
  value:60853
  */

  public isAvailablePrice = true;

  constructor(public bookingService: BookingService, public store: Store<IAppStore>) {}

  ngOnInit(): void {
    this.dateFlight$ = this.store.pipe(select(selectAllFlight));

    this.dateFlight$.pipe(takeUntil(this.ngUnsubscribe)).subscribe(
      (dateFlight) => this.dateFlight = dateFlight
    );
    console.log(this.dateFlight);



  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  public changeAvailablePrice(): void {
    console.log(this.dateFlight);
    this.isAvailablePrice = !this.isAvailablePrice;
  }
}
