import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AddSearch } from 'src/app/store/actions/actions';
import { IOptionsSearch } from 'src/app/store/models/optionsSearch';
import { IAppStore } from 'src/app/store/models/stateModel';
import { selectSearchMain } from 'src/app/store/selectors/selectors';
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
//! delete
    const dataSearch1: IOptionsSearch = {
      'destination': "WAS",
      'origin': "NYC",
      'passengers':
      [
        {name: 'Adults', desc: '14+ years', value: 1},
        {name: 'Child', desc: '2-14 years', value: 1},
        {name: 'Infant', desc: '0-2 years', value: 1},
      ],
      'returnDate': "2023-05-12",
      'startDate': "2023-05-05",
      'type': "Round",
    }
    const dataSearch2: IOptionsSearch = {
      'destination': "WAS",
      'origin': "NYC",
      'passengers':
      [
        {name: 'Adults', desc: '14+ years', value: 1},
        {name: 'Child', desc: '2-14 years', value: 1},
        {name: 'Infant', desc: '0-2 years', value: 1},
      ],
      'returnDate': undefined,
      'startDate': "2023-05-05",
      'type': "One",
    }
    this.store.dispatch(new AddSearch(dataSearch1));
//! delete



    this.searchData$ = this.store.pipe(select(selectSearchMain));

    this.searchData$.pipe(takeUntil(this.ngUnsubscribe)).subscribe(
      (searchData) => this.searchData = searchData
    );

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
