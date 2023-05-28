import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subject, takeUntil } from 'rxjs';
import { AddSelectedTickets } from 'src/app/store/actions/actions';
import { IFlightData } from 'src/app/store/models/responseApiFlightModel';
import { ISelectedTickets } from 'src/app/store/models/selectedTickets';
import { IAppStore } from 'src/app/store/models/stateModel';
import BookingService from '../../service/booking.service';
import { selectSearchMain, selectSelectedTickets } from 'src/app/store/selectors/selectors';
import { IOptionsSearch } from 'src/app/store/models/optionsSearch';

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

  public searchData: IOptionsSearch;

  public idFlight = 0;

  public isAvailablePrice = true;

  private ngUnsubscribe = new Subject<void>();

  constructor(public bookingService: BookingService, public store: Store<IAppStore>,) {}

  ngOnInit(): void {
    this.dateFlight$ = this.bookingService.getFlightDate(this.direction);
    this.dateFlight$.pipe(takeUntil(this.ngUnsubscribe))
    .subscribe(data => this.dateFlight = data);

    this.store.pipe(select(selectSelectedTickets)).pipe(takeUntil(this.ngUnsubscribe))
    .subscribe(data => this.selectedTickets = data);

    this.store.pipe(select(selectSearchMain)).pipe(takeUntil(this.ngUnsubscribe))
    .subscribe(data => this.searchData = data);
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  public changeAvailablePrice(): void {
    this.dateFlight.length

    const direction = this.direction ? 'to' : 'from' ;
    this.bookingService.changeDisabledBtnContinue({
      [direction]: this.isAvailablePrice,
    }, !!this.searchData.returnDate)

    const selectedTicket = {
      [direction]: this.dateFlight[this.idFlight],
    }

    this.store.dispatch(new AddSelectedTickets({
      ...this.selectedTickets,
      ...selectedTicket,
    }));

    this.isAvailablePrice = !this.isAvailablePrice;
  }
}
