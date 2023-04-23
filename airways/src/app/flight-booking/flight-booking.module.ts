import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlightBookingRoutingModule } from './flight-booking-routing.module';
import { FlightBookingComponent } from './flight-booking.component';


@NgModule({
  declarations: [
    FlightBookingComponent
  ],
  imports: [
    CommonModule,
    FlightBookingRoutingModule
  ]
})
export class FlightBookingModule { }
