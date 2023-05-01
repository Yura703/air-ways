import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ISearchData } from 'src/app/shared/models/models';
import BookingService from '../../service/booking.service';

@Component({
  selector: 'app-second-menu',
  templateUrl: './second-menu.component.html',
  styleUrls: ['./second-menu.component.scss']
})
export default class SecondMenuComponent implements OnInit, OnDestroy {
  private ngUnsubscribe = new Subject<void>();

  public searchData: ISearchData;

  public departureDate: FormControl;

  public arrivalDate: FormControl;

  public isAvailableEdit = false;

  constructor(public bookingService: BookingService) {}

  ngOnInit(): void {
    this.bookingService.searchData$.pipe(takeUntil(this.ngUnsubscribe)).subscribe(
      (searchData) => this.searchData = searchData
    );

    this.departureDate = new FormControl(new Date(this.searchData.departureDate));
    this.arrivalDate = new FormControl(new Date(this.searchData.arrivalDate));
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  public editSearchData(): void {
    this.isAvailableEdit = !this.isAvailableEdit;
    if (!this.isAvailableEdit) {
      this.bookingService.editSearchData({
        departureDate: this.departureDate.value,
        arrivalDate: this.arrivalDate.value,
      });
    }
  }
}
