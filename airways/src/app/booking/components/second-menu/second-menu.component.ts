import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AddSearch } from 'src/app/store/actions/actions';
import { IOptionsSearch } from 'src/app/store/models/optionsSearch';
import { IAppStore } from 'src/app/store/models/stateModel';
import BookingService from '../../service/booking.service';

@Component({
  selector: 'app-second-menu',
  templateUrl: './second-menu.component.html',
  styleUrls: ['./second-menu.component.scss']
})
export default class SecondMenuComponent implements OnInit, OnDestroy {
  private ngUnsubscribe = new Subject<void>();

  public searchData: IOptionsSearch;

  public departureDate: FormControl;

  public arrivalDate: FormControl;

  public isAvailableEdit = false;

  public searchData$: Observable<IOptionsSearch>;

  public formDate: FormGroup;

  public startDate = new FormControl(new Date());

  constructor(public bookingService: BookingService, public store: Store<IAppStore>) {}

  ngOnInit(): void {
    this.searchData$ = this.bookingService.getSearchData();

    this.searchData$.pipe(takeUntil(this.ngUnsubscribe)).subscribe(
      (searchData) => this.searchData = searchData
    );

    this.bookingService.typeFlyRoundOrOneWay$.next(this.searchData.type === 'Round');

    this.formDate = new FormGroup({
      start: new FormControl(new Date(this.searchData.startDate)),
      end: new FormControl(new Date(this.searchData.returnDate!)),
    });
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  public onChangeDate(type: string) {
    if (type === 'round') {
      this.store.dispatch(new AddSearch({
        ...this.searchData,
        startDate: this.formDate.value.start?.toString() as string,
        returnDate: this.formDate.value.end?.toString() as string,
      }));
    } else {

      this.store.dispatch(new AddSearch({
        ...this.searchData,
        startDate: this.startDate.value?.toString() as string,
      }));
    }

  }

  public editSearchData(): void {
    this.isAvailableEdit = !this.isAvailableEdit;
  }
}
