import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs';
// import { AddSearch } from 'src/app/store/actions/actions';
// import { IOptionsSearch } from 'src/app/store/models/optionsSearch';
import { IState } from 'src/app/store/models/stateModel';
import BookingService from '../../service/booking.service';

@Component({
  selector: 'app-passengers-page',
  templateUrl: './passengers-page.component.html',
  styleUrls: ['./passengers-page.component.scss']
})
export class PassengersPageComponent implements OnInit {
  public isAvailableTicketsOrPassengers = true;

  public continueChange = false;

  public btnContinueIsDisabled$: BehaviorSubject<boolean>;

  constructor(
    private router: Router,
    private store: Store<IState>,
    private bookingService: BookingService
  ) {}

  ngOnInit(): void {
    this.btnContinueIsDisabled$ = this.bookingService.btnContinueIsDisabled$;
  }

  public goBack(): void {
    if (this.isAvailableTicketsOrPassengers) {
      this.router.navigate(['']);
    }

    this.isAvailableTicketsOrPassengers = !this.isAvailableTicketsOrPassengers;
  }

  public continue(): void {
    if (!this.isAvailableTicketsOrPassengers) {
      this.continueChange = !this.continueChange;

      //this.router.navigate(['']);//! переход к старанице билетов
    } else this.isAvailableTicketsOrPassengers = !this.isAvailableTicketsOrPassengers;
  }
}
