import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking-page',
  templateUrl: './booking-page.component.html',
  styleUrls: ['./booking-page.component.scss']
})
export default class BookingPageComponent {

  public isAvailableTicketsOrPassengers = true;

  constructor(private router: Router) {

  }

  public goBack(): void {
    if (this.isAvailableTicketsOrPassengers) {
      this.router.navigate(['']);
    }

    this.isAvailableTicketsOrPassengers = !this.isAvailableTicketsOrPassengers;
  }

  public continue(): void {
    if (!this.isAvailableTicketsOrPassengers) {
      //this.router.navigate(['']);//! переход к старанице билетов
    }

    this.isAvailableTicketsOrPassengers = !this.isAvailableTicketsOrPassengers;
  }
}
