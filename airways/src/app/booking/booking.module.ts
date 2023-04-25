import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import BookingPageComponent from './pages/booking-page/booking-page.component';
import BookingRoutingModule from './booking-routing.module';
import ReturnWayComponent from './components/return-way/return-way.component';
import SecondMenuComponent from './components/second-menu/second-menu.component';
import TicketSectionComponent from './components/ticket-section/ticket-section.component';
import OneWayComponent from './components/one-way/one-way.component';
import { CardSliderComponent } from './components/card-slider/card-slider.component';
@NgModule({
  declarations: [
    SecondMenuComponent,
    BookingPageComponent,
    OneWayComponent,
    ReturnWayComponent,
    TicketSectionComponent,
    CardSliderComponent,

  ],
  imports: [
    CommonModule,
    BookingRoutingModule
  ],
  exports: [BookingPageComponent]
})
export default class BookingModule { }
