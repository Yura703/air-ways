import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
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
  styleUrls: ['./second-menu.component.scss'],
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

  public editBtnIsVisible = true;

  constructor(
    public bookingService: BookingService,
    public store: Store<IAppStore>,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.searchData$ = this.bookingService.getSearchData();

    this.searchData$
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((searchData) => (this.searchData = searchData));

    this.bookingService.typeFlyRoundOrOneWay$.next(
      this.searchData.type === 'Round'
    );

    this.formDate = new FormGroup({
      start: new FormControl(new Date(this.searchData.startDate)),
      end: new FormControl(new Date(this.searchData.returnDate ?? '')),
    });

    this.editBtnIsVisible = !(this.router.url.includes('passengers')
      || this.router.url.includes('summary'));
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  public onChangeDate(type: string) {
    if (type === 'round') {
        this.store.dispatch(
        new AddSearch({
          ...this.searchData,
          startDate: this.formDate.value.start?.toISOString().slice(0,10) as string,
          returnDate: this.formDate.value.end?.toISOString().slice(0,10) as string,
        })
      );
    } else {
      this.store.dispatch(
        new AddSearch({
          ...this.searchData,
          startDate: this.startDate.value?.toISOString().slice(0,10) as string,
        })
      );
    }
  }

  public editSearchData(): void {
    this.isAvailableEdit = !this.isAvailableEdit;
  }
}
