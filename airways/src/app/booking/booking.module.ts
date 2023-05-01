import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import BookingPageComponent from './pages/booking-page/booking-page.component';
import BookingRoutingModule from './booking-routing.module';
import ReturnWayComponent from './components/return-way/return-way.component';
import SecondMenuComponent from './components/second-menu/second-menu.component';
import TicketSectionComponent from './components/ticket-section/ticket-section.component';
import OneWayComponent from './components/one-way/one-way.component';
import { CardSliderComponent } from './components/card-slider/card-slider.component';
import { MaterialModule } from '../material/material.module';
import { CoreModule } from '../core/core.module';
import { PassengersFormComponent } from './components/passengers-form/passengers-form.component';
import QuantityPassengersPipe from './pipes/quantity-passengers.pipe';
@NgModule({
  declarations: [
    SecondMenuComponent,
    BookingPageComponent,
    OneWayComponent,
    ReturnWayComponent,
    TicketSectionComponent,
    CardSliderComponent,
    PassengersFormComponent,
    QuantityPassengersPipe,
  ],
  imports: [
    CommonModule,
    BookingRoutingModule,
    MaterialModule,
    CoreModule
  ],
  exports: [BookingPageComponent]
})
export default class BookingModule { }
