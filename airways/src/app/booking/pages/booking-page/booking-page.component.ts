import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs';
// import { AddSearch } from 'src/app/store/actions/actions';
// import { IOptionsSearch } from 'src/app/store/models/optionsSearch';
import { IState } from 'src/app/store/models/stateModel';
import { AuthUserDataService } from '../../../core/services/auth-user-data.service';
import { OpenDialogService } from '../../../core/services/open-dialog.service';
import BookingService from '../../service/booking.service';

@Component({
  selector: 'app-booking-page',
  templateUrl: './booking-page.component.html',
  styleUrls: ['./booking-page.component.scss'],
})
export default class BookingPageComponent implements OnInit {
  public isAvailableTicketsOrPassengers = true;

  logIn = false;

  public btnContinueIsDisabled$: BehaviorSubject<boolean>;

  constructor(
    private router: Router,
    private store: Store<IState>,
    private bookingService: BookingService,
    private authUserDataService: AuthUserDataService,
    private openDialogService: OpenDialogService
  ) {}

  ngOnInit(): void {
    this.btnContinueIsDisabled$ = this.bookingService.btnContinueIsDisabled$;
    this.authUserDataService.logIn.subscribe((value: boolean) => {
      this.logIn = value;
    });
  }

  public goBack(): void {
    if (this.isAvailableTicketsOrPassengers) {
      this.router.navigate(['']);
    }

    this.isAvailableTicketsOrPassengers = !this.isAvailableTicketsOrPassengers;
  }

  public continue(): void {
    if (!this.logIn) {
      this.openDialogService.openDialog();
    } else {
      if (!this.isAvailableTicketsOrPassengers) {
        //this.router.navigate(['']);//! переход к старанице билетов
      }

      this.isAvailableTicketsOrPassengers =
        !this.isAvailableTicketsOrPassengers;
    }
  }
}
