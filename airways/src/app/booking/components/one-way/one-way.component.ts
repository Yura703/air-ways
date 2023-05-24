import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, takeUntil } from 'rxjs';
import { IFlightData } from 'src/app/store/models/responseApiFlightModel';
import { ISelectedTickets } from 'src/app/store/models/selectedTickets';
import BookingService from '../../service/booking.service';

@Component({
  selector: 'app-one-way',
  templateUrl: './one-way.component.html',
  styleUrls: ['./one-way.component.scss']
})
export default class OneWayComponent implements OnInit, OnDestroy {

  @Input() direction: boolean;

  public dateFlight$: Observable<IFlightData[]>;

  public dateFlight: IFlightData[];

  public selectedTickets: ISelectedTickets;

  public idFlight = 0;

  public isAvailablePrice = true;

  private ngUnsubscribe = new Subject<void>();

  constructor(public bookingService: BookingService) {}

  ngOnInit(): void {
    this.dateFlight$ = this.bookingService.getFlightDate(this.direction);
    this.dateFlight$.pipe(takeUntil(this.ngUnsubscribe))
    .subscribe(data => this.dateFlight = data);

    this.bookingService.selectedTickets$.pipe(takeUntil(this.ngUnsubscribe))
    .subscribe(data => this.selectedTickets = data);
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  public changeAvailablePrice(): void {
    const direction = this.direction ? 'to' : 'from' ;
    this.bookingService.changeDisabledBtnContinue({
      [direction]: this.isAvailablePrice,
    })

    const selectedTicket = {
      [direction]: this.dateFlight[this.idFlight],
    }
    this.bookingService.selectedTickets$.next({//! данные по рейсам
      ...this.selectedTickets,
      ...selectedTicket,
    });

    this.isAvailablePrice = !this.isAvailablePrice;
  }
}
