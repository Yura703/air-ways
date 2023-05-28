import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import BookingPageComponent from './pages/booking-page/booking-page.component';
import { PassengersPageComponent } from './pages/passengers-page/passengers-page.component';
import { SummaryPageComponent } from './pages/summary-page/summary.component';

const routes: Routes = [
  { path: '', component: BookingPageComponent },
  { path: 'passengers', component: PassengersPageComponent },
  { path: 'summary', component: SummaryPageComponent },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export default class BookingRoutingModule {}
