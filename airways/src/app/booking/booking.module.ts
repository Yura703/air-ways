import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxFlickingModule } from '@egjs/ngx-flicking';
import { CoreModule } from '../core/core.module';
import { MaterialModule } from '../material/material.module';
import BookingRoutingModule from './booking-routing.module';
import { CardPassengerComponent } from './components/card-passenger/card-passenger.component';
import { CardSliderComponent } from './components/card-slider/card-slider.component';
import OneWayComponent from './components/one-way/one-way.component';
import { PassengersFormComponent } from './components/passengers-form/passengers-form.component';
import { PassengersInfoComponent } from './components/passengers-info/passengers-info.component';
import SecondMenuComponent from './components/second-menu/second-menu.component';
import TicketSectionComponent from './components/ticket-section/ticket-section.component';
import { ColorBgByCountDirective } from './directives/color-bg-by-count.directive';
import BookingPageComponent from './pages/booking-page/booking-page.component';
import { ChangeDayToDatePipe } from './pipes/change-day-to-date.pipe';
import { FullCityNamePipe } from './pipes/full-city-name.pipe';
import { QuantityPassengersPipe } from './pipes/quantity-passengers.pipe';

@NgModule({
  declarations: [
    SecondMenuComponent,
    BookingPageComponent,
    OneWayComponent,
    TicketSectionComponent,
    CardSliderComponent,
    PassengersFormComponent,
    ChangeDayToDatePipe,
    QuantityPassengersPipe,
    FullCityNamePipe,
    PassengersInfoComponent,
    CardPassengerComponent,
    ColorBgByCountDirective,
  ],
  imports: [
    CommonModule,
    BookingRoutingModule,
    MaterialModule,
    CoreModule,
    NgxFlickingModule,
  ],
  exports: [BookingPageComponent],
})
export class BookingModule {}
