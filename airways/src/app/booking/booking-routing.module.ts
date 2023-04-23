import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import BookingPageComponent from './pages/booking-page/booking-page.component';

const routes: Routes = [{ path: '', component: BookingPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export default class BookingRoutingModule {}
