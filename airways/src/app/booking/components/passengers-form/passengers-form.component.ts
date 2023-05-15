import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { AddSearch } from 'src/app/store/actions/actions';
import { takeUntil } from 'rxjs/operators';
import { IOptionsSearch } from 'src/app/store/models/optionsSearch';
import { IAppStore } from 'src/app/store/models/stateModel';
import { selectSearchMain } from 'src/app/store/selectors/selectors';
import BookingService from '../../service/booking.service';

@Component({
  selector: 'app-passengers-form',
  templateUrl: './passengers-form.component.html',
  styleUrls: ['./passengers-form.component.scss']
})
export class PassengersFormComponent implements OnInit, OnDestroy {
  public searchData: IOptionsSearch;

  public passengersForm: FormGroup;

  public optionPassenger: string;

  public searchData$: Observable<IOptionsSearch>;

  private ngUnsubscribe = new Subject<void>();

  constructor(private fb: FormBuilder, private bookingService: BookingService, public store: Store<IAppStore>) {}

  ngOnInit(): void {
    this.searchData$ = this.store.pipe(select(selectSearchMain));

    this.searchData$.pipe(takeUntil(this.ngUnsubscribe)).subscribe(searchData => this.searchData = searchData);

    this.passengersForm = this.fb.group({
      value: [this.searchData],
    });

    this.updatePassengers();
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  private updatePassengers() {
    this.optionPassenger = `${this.searchData.passengers[0].value} Adult, ${this.searchData.passengers[1].value} Child, ${this.searchData.passengers[2].value} Infant`;
  }

  clickPlus(event: Event, name: string) {
    event.stopPropagation();

    const passengers = this.searchData.passengers.map(passenger => {
      if (passenger.name === name) {
        const count = passenger.value + 1;
        return {
          ...passenger,
          value: count,
        }
      }
      return passenger;
    });

    this.store.dispatch(new AddSearch({
      ...this.searchData,
      passengers: passengers,
    }));

    this.updatePassengers();
  }

  clickMinus(event: Event, name: string) {
    event.stopPropagation();
    const passengers = this.searchData.passengers.map(passenger => {
      if (passenger.name === name) {
        const count = passenger.value - 1;
        return {
          ...passenger,
          value: count,
        }
      }
      return passenger;
    });

    this.store.dispatch(new AddSearch({
      ...this.searchData,
      passengers: passengers,
    }));

    this.updatePassengers();
  }
}
